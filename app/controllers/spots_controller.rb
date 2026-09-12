require "net/http"

class SpotsController < ApplicationController
  def index
    trip = Trip.find(params[:trip_id])
    render json: trip.spots.map { |s| spot_json(s) }
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  end

  def create
    trip = Trip.find(params[:trip_id])
    url = spot_params[:source_url]

    provider = Spot.detect_provider(url)
    if provider == :unknown
      return render json: { error: "Not a recognized Google or Apple Maps link" },
                     status: :unprocessable_entity
    end

    result = case provider
    when :google then Geocoding::GoogleMaps.geocode(url)
    when :apple then Geocoding::AppleMaps.geocode(url)
    end

    spot = trip.spots.new(
      user: current_user,
      name: result.name,
      address: result.address,
      source_url: url,
      source_provider: provider.to_s,
      note: spot_params[:note],
      photo_reference: result.photo_reference,
      location: RGeo::Geographic.spherical_factory(srid: 4326)
                  .point(result.longitude, result.latitude)
    )

    if spot.save
      render json: spot_json(spot), status: :created
    else
      render json: { errors: spot.errors.full_messages }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  rescue Geocoding::Error => e
    render json: { error: "Could not geocode that link: #{e.message}" },
           status: :unprocessable_entity
  end

  def photo
    spot = Trip.find(params[:trip_id]).spots.find(params[:id])
    return head :not_found if spot.photo_reference.blank?

    uri = URI("https://maps.googleapis.com/maps/api/place/photo")
    uri.query = URI.encode_www_form(
      maxwidth: 400,
      photo_reference: spot.photo_reference,
      key: Rails.application.credentials.google_maps[:geocoding_api_key]
    )

    response = Net::HTTP.get_response(uri)

    if response.is_a?(Net::HTTPRedirection)
      # Google's Photo endpoint responds with a redirect to the actual image
      image_response = Net::HTTP.get_response(URI(response["location"]))
      send_data image_response.body, type: image_response["content-type"], disposition: "inline"
    elsif response.is_a?(Net::HTTPSuccess)
      send_data response.body, type: response["content-type"], disposition: "inline"
    else
      head :bad_gateway
    end
  rescue ActiveRecord::RecordNotFound
    head :not_found
  end

  private

  def spot_params
    params.require(:spot).permit(:source_url, :note)
  end

  def spot_json(spot)
    {
      id: spot.id,
      trip_id: spot.trip_id,
      name: spot.name,
      address: spot.address,
      latitude: spot.latitude,
      longitude: spot.longitude,
      source_provider: spot.source_provider,
      source_url: spot.source_url,
      note: spot.note,
      owner_id: spot.user_id
    }
  end
end
