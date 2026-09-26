class DayPlanSpot < ApplicationRecord
  belongs_to :day_plan
  belongs_to :spot

  validates :rank, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :spot_id, uniqueness: { scope: :day_plan_id, message: "is already in this day plan" }
end
