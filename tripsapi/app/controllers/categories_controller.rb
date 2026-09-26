class CategoriesController < ApplicationController
  def index
    trip = Trip.find(params[:trip_id])
    render json: trip.categories.map { |c| category_json(c) }
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  end

  def create
    trip = Trip.find(params[:trip_id])
    category = trip.categories.new(category_params)

    if category.save
      render json: category_json(category), status: :created
    else
      render json: { errors: category.errors.full_messages }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Trip not found" }, status: :not_found
  end

  private

  def category_params
    params.require(:category).permit(:name, :color)
  end

  def category_json(category)
    { id: category.id, name: category.name, color: category.color }
  end
end
