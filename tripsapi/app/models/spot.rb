class Spot < ApplicationRecord
  GOOGLE_HOSTS = %w[maps.google.com goo.gl maps.app.goo.gl google.com].freeze
  APPLE_HOSTS = %w[maps.apple.com].freeze

  belongs_to :trip
  belongs_to :user
  has_many :spot_categories, dependent: :destroy
  has_many :categories, through: :spot_categories
  has_many :day_plan_spots, dependent: :destroy
  has_many :day_plans, through: :day_plan_spots

  validates :name, presence: true
  validates :source_url, presence: true
  validates :source_url, uniqueness: { scope: :trip_id, message: "has already been added to this trip" }
  validates :source_provider, presence: true, inclusion: { in: %w[google apple] }
  validates :location, presence: true

  def self.detect_provider(url)
    host = URI.parse(url).host&.downcase
    return :google if host && GOOGLE_HOSTS.any? { |h| host.end_with?(h) }
    return :apple if host && APPLE_HOSTS.any? { |h| host.end_with?(h) }

    :unknown
  rescue URI::InvalidURIError
    :unknown
  end

  # Convenience readers — RGeo::Geographic::SphericalPointImpl under the hood
  def latitude
    location&.y
  end

  def longitude
    location&.x
  end
end
