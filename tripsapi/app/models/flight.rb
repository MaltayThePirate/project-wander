class Flight < ApplicationRecord
  belongs_to :trip
  belongs_to :user

  validates :user_id, uniqueness: { scope: :trip_id, message: "already has flight details for this trip" }
end
