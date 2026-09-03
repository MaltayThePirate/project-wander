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
      raise Geocoding::Error, "could not extract a place from this Google Maps link" if query.nil?

      response = fetch(query)
      parse(response)
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
        fields: "name,formatted_address,geometry",
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

      Geocoding::Result.new(
        name: result["name"],
        address: result["formatted_address"],
        latitude: location["lat"],
        longitude: location["lng"]
      )
    end
  end
end
