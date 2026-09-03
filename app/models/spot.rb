class Spot < ApplicationRecord
  GOOGLE_HOSTS = %w[maps.google.com goo.gl maps.app.goo.gl google.com].freeze
  APPLE_HOSTS = %w[maps.apple.com].freeze

  belongs_to :trip
  belongs_to :user

  validates :name, presence: true
  validates :source_url, presence: true
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
