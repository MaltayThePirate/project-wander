class FlightsController < ApplicationController
  before_action :set_trip

  # GET /trips/:trip_id/flight
  def show
    flight = @trip.flights.find_by(user: current_user)
    if flight
      render json: flight_json(flight)
    else
      render json: { flight: nil }
    end
  end

  # POST /trips/:trip_id/flight
  def create
    flight = @trip.flights.find_or_initialize_by(user: current_user)
    if flight.update(flight_params)
      render json: flight_json(flight), status: :created
    else
      render json: { errors: flight.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trips/:trip_id/flight
  def update
    flight = @trip.flights.find_by(user: current_user)
    if flight.nil?
      flight = @trip.flights.build(user: current_user, **flight_params)
    end

    if flight.update(flight_params)
      render json: flight_json(flight)
    else
      render json: { errors: flight.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  end

  def flight_params
    params.require(:flight).permit(
      :arrival_date,
      :arrival_flight_number,
      :arrival_origin,
      :departure_date,
      :departure_flight_number,
      :departure_destination
    )
  end

  def flight_json(flight)
    {
      id: flight.id,
      trip_id: flight.trip_id,
      member_id: flight.user_id,
      arrival_date: flight.arrival_date,
      arrival_flight_number: flight.arrival_flight_number,
      arrival_origin: flight.arrival_origin,
      departure_date: flight.departure_date,
      departure_flight_number: flight.departure_flight_number,
      departure_destination: flight.departure_destination,
      created_at: flight.created_at,
      updated_at: flight.updated_at
    }
  end
end
