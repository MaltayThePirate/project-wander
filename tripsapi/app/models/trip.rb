class Trip < ApplicationRecord
  has_many :trip_memberships, dependent: :destroy
  has_many :users, through: :trip_memberships
  has_many :spots, dependent: :destroy
  has_many :categories, dependent: :destroy
  has_many :day_plans, dependent: :destroy
  has_many :flights, dependent: :destroy

  STARTER_CATEGORIES = [
    { name: "Places to Eat", color: "#B8462F" },
    { name: "Landmarks",     color: "#2B6E6E" },
    { name: "Nightlife",     color: "#7A4FA3" },
    { name: "Nature",        color: "#3E7A3E" },
    { name: "Shopping",      color: "#C98A2E" },
  ].freeze

  after_create :seed_default_categories

  validates :name, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validate :end_date_on_or_after_start_date
  validate :no_out_of_range_day_plans_with_spots, on: :update

  private

  def seed_default_categories
    STARTER_CATEGORIES.each { |attrs| categories.create!(attrs) }
  end

  def end_date_on_or_after_start_date
    return if start_date.blank? || end_date.blank?
    return if end_date >= start_date

    errors.add(:end_date, "must be on or after the start date")
  end

  def no_out_of_range_day_plans_with_spots
    return if start_date.blank? || end_date.blank?

    out_of_range_plans = day_plans.joins(:day_plan_spots).where("date < ? OR date > ?", start_date, end_date).distinct
    if out_of_range_plans.exists?
      errors.add(:base, "Cannot change trip window: there are day plans with spots outside the new date range")
    end
  end
end
