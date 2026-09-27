class AccommodationsController < ApplicationController
  before_action :set_trip
  before_action :set_accommodation, only: [:update, :destroy]

  # GET /trips/:trip_id/accommodations
  def index
    accommodations = @trip.accommodations.order(start_date: :asc)
    render json: accommodations.map { |acc| accommodation_json(acc, accommodations) }
  end

  # POST /trips/:trip_id/accommodations
  def create
    accommodation = @trip.accommodations.build(accommodation_params)
    if accommodation.save
      all_accommodations = @trip.accommodations.reload.order(start_date: :asc)
      render json: accommodation_json(accommodation, all_accommodations), status: :created
    else
      render json: { errors: accommodation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trips/:trip_id/accommodations/:id
  def update
    if @accommodation.update(accommodation_params)
      all_accommodations = @trip.accommodations.reload.order(start_date: :asc)
      render json: accommodation_json(@accommodation, all_accommodations)
    else
      render json: { errors: @accommodation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /trips/:trip_id/accommodations/:id
  def destroy
    @accommodation.destroy
    head :no_content
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  end

  def set_accommodation
    @accommodation = @trip.accommodations.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Accommodation not found" }, status: :not_found
  end

  def accommodation_params
    params.require(:accommodation).permit(:name, :address, :start_date, :end_date, :active, :latitude, :longitude)
  end

  def accommodation_json(accommodation, all_accommodations)
    overlapping = all_accommodations.any? do |other|
      other.id != accommodation.id &&
        accommodation.start_date.present? && accommodation.end_date.present? &&
        other.start_date.present? && other.end_date.present? &&
        accommodation.start_date <= other.end_date && accommodation.end_date >= other.start_date
    end

    {
      id: accommodation.id,
      trip_id: accommodation.trip_id,
      name: accommodation.name,
      address: accommodation.address,
      start_date: accommodation.start_date,
      end_date: accommodation.end_date,
      active: accommodation.active,
      latitude: accommodation.latitude,
      longitude: accommodation.longitude,
      overlapping: overlapping,
      created_at: accommodation.created_at,
      updated_at: accommodation.updated_at
    }
  end
end
