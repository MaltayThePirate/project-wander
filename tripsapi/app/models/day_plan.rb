class DayPlan < ApplicationRecord
  belongs_to :trip
  belongs_to :user
  has_many :day_plan_spots, dependent: :destroy
  has_many :spots, through: :day_plan_spots

  validates :date, presence: true
  validates :user_id, uniqueness: { scope: [ :trip_id, :date ], message: "already has a day plan for this date" }
  validate :date_within_trip_window

  private

  def date_within_trip_window
    return if trip.blank? || date.blank?
    if date < trip.start_date || date > trip.end_date
      errors.add(:date, "must be within the trip window (#{trip.start_date} to #{trip.end_date})")
    end
  end
end
