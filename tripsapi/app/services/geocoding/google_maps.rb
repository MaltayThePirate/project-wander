require "net/http"
require "json"

module Geocoding
  class GoogleMaps
    ENDPOINT = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json".freeze
    SHORTLINK_HOSTS = %w[goo.gl maps.app.goo.gl].freeze
    MAX_REDIRECTS = 5

    def self.geocode(url)
      resolved_url = resolve_shortlink(url)
      query = extract_query(resolved_url)

      # If URL contains coordinates (@lat,lng), trust the exact coordinates and place name from URL path
      if (match = resolved_url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/))
        lat = match[1].to_f
        lng = match[2].to_f

        # Try to fetch place details to get address and photo
        result = fetch_precise_place(query, lat, lng)
        return result if result && query.present? && result.name.downcase.include?(query.downcase.split.first)

        # If text search returned wrong place, use reverse geocoding to get exact formatted address for the lat/lng
        reverse_address = fetch_reverse_geocoded_address(lat, lng)

        return Geocoding::Result.new(
          name: query || "Saved Spot",
          address: reverse_address || "Tokyo, Japan",
          latitude: lat,
          longitude: lng,
          photo_reference: result&.photo_reference
        )
      end

      raise Geocoding::Error, "could not extract a place from this Google Maps link" if query.nil?

      response = fetch(query)
      parse(response)
    end

    def self.fetch_reverse_geocoded_address(lat, lng)
      uri = URI("https://maps.googleapis.com/maps/api/geocode/json")
      uri.query = URI.encode_www_form(
        latlng: "#{lat},#{lng}",
        key: Rails.application.credentials.google_maps[:geocoding_api_key]
      )

      response = Net::HTTP.get_response(uri)
      return nil unless response.is_a?(Net::HTTPSuccess)

      body = JSON.parse(response.body)
      return nil unless body["status"] == "OK" && body["results"].present?

      body["results"].first["formatted_address"]
    rescue StandardError
      nil
    end

    def self.fetch_precise_place(query, lat, lng)
      # Use Google Places Nearby Search / Text Search with strict location and radius
      uri = URI("https://maps.googleapis.com/maps/api/place/textsearch/json")
      params = {
        location: "#{lat},#{lng}",
        radius: 100, # strict 100m radius around dropped pin coordinates
        key: Rails.application.credentials.google_maps[:geocoding_api_key]
      }
      params[:query] = query if query.present?

      uri.query = URI.encode_www_form(params)
      response = Net::HTTP.get_response(uri)
      return nil unless response.is_a?(Net::HTTPSuccess)

      body = JSON.parse(response.body)
      return nil unless body["status"] == "OK" && body["results"].present?

      result = body["results"].first
      location = result.dig("geometry", "location")
      photo_reference = result.dig("photos", 0, "photo_reference")

      Geocoding::Result.new(
        name: result["name"],
        address: result["formatted_address"],
        latitude: location["lat"],
        longitude: location["lng"],
        photo_reference: photo_reference
      )
    rescue StandardError
      nil
    end

    def self.resolve_shortlink(url, redirects_left = MAX_REDIRECTS)
      uri = URI.parse(url)
      return url unless SHORTLINK_HOSTS.include?(uri.host&.downcase)
      raise Geocoding::Error, "too many redirects resolving shortlink" if redirects_left <= 0

      response = Net::HTTP.get_response(uri)

      case response
      when Net::HTTPRedirection
        location = response["location"]
        raise Geocoding::Error, "shortlink did not redirect anywhere" if location.nil?

        resolve_shortlink(location, redirects_left - 1)
      when Net::HTTPSuccess
        url # already resolved, nothing to follow
      else
        raise Geocoding::Error, "could not resolve shortlink (#{response.code})"
      end
    rescue URI::InvalidURIError
      raise Geocoding::Error, "invalid shortlink URL"
    end

    def self.extract_query(url)
      uri = URI.parse(url)
      params = URI.decode_www_form(uri.query.to_s).to_h

      return params["q"] if params["q"].present?

      # Fallback: /maps/place/<name>/@lat,lng,zoom
      if (match = uri.path.match(%r{/maps/place/([^/]+)}))
        return match[1].tr("+", " ")
      end

      nil
    rescue URI::InvalidURIError
      nil
    end

    def self.fetch(query)
      uri = URI(ENDPOINT)
      uri.query = URI.encode_www_form(
        input: query,
        inputtype: "textquery",
        fields: "name,formatted_address,geometry,photos",
        key: Rails.application.credentials.google_maps[:geocoding_api_key]
      )

      response = Net::HTTP.get_response(uri)
      raise Geocoding::Error, "Google Places API returned #{response.code}" unless response.is_a?(Net::HTTPSuccess)

      JSON.parse(response.body)
    end

    def self.parse(response)
      raise Geocoding::Error, "Google Places API status: #{response['status']}" unless response["status"] == "OK"

      result = response["candidates"].first
      raise Geocoding::Error, "no results returned" if result.nil?

      location = result.dig("geometry", "location")
      photo_reference = result.dig("photos", 0, "photo_reference")

      Geocoding::Result.new(
        name: result["name"],
        address: result["formatted_address"],
        latitude: location["lat"],
        longitude: location["lng"],
        photo_reference: photo_reference,
      )
    end
  end
end
