class Category < ApplicationRecord
  belongs_to :trip
  has_many :spot_categories, dependent: :destroy
  has_many :spots, through: :spot_categories

  validates :name, presence: true, uniqueness: { scope: :trip_id }
  validates :color, presence: true
end
