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

  private

  def spot_params
    params.require(:spot).permit(:source_url, :note)
  end

  def spot_json(spot)
    {
      id: spot.id,
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
