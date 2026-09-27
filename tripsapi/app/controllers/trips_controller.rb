class TripsController < ApplicationController
  def create
    trip = Trip.new(trip_params)

    if trip.save
      trip.trip_memberships.create!(user: current_user)
      render json: trip_json(trip), status: :created
    else
      render json: { errors: trip.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    trip = Trip.find(params[:id])
    render json: trip_json(trip)
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  end

  def update
    trip = Trip.find(params[:id])
    if trip.update(trip_params)
      render json: trip_json(trip)
    else
      render json: { errors: trip.errors.full_messages }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :start_date, :end_date)
  end

  def trip_json(trip)
    {
      id: trip.id,
      name: trip.name,
      start_date: trip.start_date,
      end_date: trip.end_date,
      accommodations: trip.accommodations.order(start_date: :asc).map { |acc|
        {
          id: acc.id,
          name: acc.name,
          address: acc.address,
          start_date: acc.start_date,
          end_date: acc.end_date,
          active: acc.active,
          latitude: acc.latitude,
          longitude: acc.longitude
        }
      },
      members: trip.trip_memberships.includes(:user).map { |m|
        {
          id: m.user.id,
          name: m.user.name,
          email: m.user.email
        }
      }
    }
  end
end
