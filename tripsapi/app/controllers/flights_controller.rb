class FlightsController < ApplicationController
  before_action :set_trip

  # GET /trips/:trip_id/flights
  def index
    flights = @trip.flights.includes(:user).order(Arel.sql("COALESCE(departure_time, arrival_time) ASC, arrival_time ASC, id ASC"))
    render json: flights.map { |f| flight_json(f) }
  end

  # POST /trips/:trip_id/flights
  def create
    flight = @trip.flights.build(user: current_user, **flight_params)
    if flight.save
      render json: flight_json(flight), status: :created
    else
      render json: { errors: flight.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trips/:trip_id/flights/:id
  def update
    flight = @trip.flights.find_by(id: params[:id], user: current_user)
    return render json: { error: "Flight not found" }, status: :not_found unless flight

    if flight.update(flight_params)
      render json: flight_json(flight)
    else
      render json: { errors: flight.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /trips/:trip_id/flights/:id
  def destroy
    flight = @trip.flights.find_by(id: params[:id], user: current_user)
    return render json: { error: "Flight not found" }, status: :not_found unless flight

    flight.destroy
    head :no_content
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  end

  def flight_params
    params.require(:flight).permit(
      :flight_number,
      :departure_airport,
      :arrival_airport,
      :departure_time,
      :arrival_time
    )
  end

  def flight_json(flight)
    {
      id: flight.id,
      trip_id: flight.trip_id,
      user_id: flight.user_id,
      is_mine: flight.user_id == current_user.id,
      user: {
        id: flight.user_id,
        name: flight.user&.name || flight.user&.email || "Member"
      },
      flight_number: flight.flight_number,
      departure_airport: flight.departure_airport,
      arrival_airport: flight.arrival_airport,
      departure_time: flight.departure_time,
      arrival_time: flight.arrival_time
    }
  end
end
