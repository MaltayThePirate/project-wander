class SpotCategory < ApplicationRecord
  belongs_to :spot
  belongs_to :category

  validates :category_id, uniqueness: { scope: :spot_id }
end
