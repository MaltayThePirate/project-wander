class DayPlansController < ApplicationController
  before_action :set_trip
  before_action :set_user

  # GET /trips/:trip_id/day-plans/:member_id/:date
  def show
    @day_plan = @trip.day_plans.find_by(user: @user, date: params[:date])
    if @day_plan
      render json: day_plan_json(@day_plan)
    else
      render json: { day_plan: nil, spots: [] }
    end
  end

  # POST /trips/:trip_id/day-plans/:member_id/:date
  # Acts as an upsert/sync for the day plan and its ordered spot assignments.
  # If the day plan record doesn't exist for this trip, member, and date yet,
  # it initializes and saves a new one. Then, it synchronizes the associated
  # spots and their relative ranks (supporting both full reordering and appending/updating).
  def create
    @day_plan = @trip.day_plans.find_or_initialize_by(user: @user, date: params[:date])

    ActiveRecord::Base.transaction do
      # Ensure the DayPlan header record is persisted before associating spots
      if @day_plan.new_record? && !@day_plan.save
        render json: { errors: @day_plan.errors.full_messages }, status: :unprocessable_entity
        raise ActiveRecord::Rollback
      end

      # If a list of spots is provided in the request payload, synchronize them.
      # This handles both full ordering updates (drag-and-drop / reordering)
      # and incremental additions/updates to the day's itinerary.
      if params[:spots].is_a?(Array)
        existing_spots = @day_plan.day_plan_spots.index_by(&:spot_id)
        incoming_spot_ids = []

        params[:spots].each_with_index do |spot_item, index|
          spot_id = spot_item[:spot_id] || spot_item["spot_id"]
          rank = spot_item[:rank] || spot_item["rank"] || index
          incoming_spot_ids << spot_id.to_i

          dps = existing_spots[spot_id.to_i]
          if dps
            dps.update!(rank: rank)
          else
            @day_plan.day_plan_spots.create!(spot_id: spot_id, rank: rank)
          end
        end

        # Remove any spots that were unassigned/removed in this update sync
        @day_plan.day_plan_spots.where.not(spot_id: incoming_spot_ids).destroy_all
      end

      render json: day_plan_json(@day_plan.reload), status: :ok
    end
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: [ e.message ] }, status: :unprocessable_entity
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  end

  def set_user
    @user = @trip.users.find(params[:member_id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Member not found in trip" }, status: :not_found
  end

  def day_plan_json(day_plan)
    {
      id: day_plan.id,
      trip_id: day_plan.trip_id,
      member_id: day_plan.user_id,
      date: day_plan.date,
      spots: day_plan.day_plan_spots.order(:rank).map { |dps|
        {
          id: dps.spot.id,
          name: dps.spot.name,
          address: dps.spot.address,
          latitude: dps.spot.latitude,
          longitude: dps.spot.longitude,
          source_url: dps.spot.source_url,
          source_provider: dps.spot.source_provider,
          rank: dps.rank,
          day_plan_spot_id: dps.id
        }
      }
    }
  end
end

