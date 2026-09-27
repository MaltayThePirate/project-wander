class Accommodation < ApplicationRecord
  belongs_to :trip

  validates :name, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true, date_range: { start_date: :start_date }

  before_save :geocode_address_if_needed

  private

  def geocode_address_if_needed
    return if address.blank?
    return if latitude.present? && longitude.present? && !address_changed?

    original_address = address
    result = Geocoding::GoogleMaps.geocode_address(original_address)
    if result
      self.latitude = result.latitude
      self.longitude = result.longitude
      # Preserve original user input address instead of overwriting with coarse postal/formatted address
      self.address = original_address
    end
  rescue StandardError => e
    Rails.logger.error("Failed to geocode accommodation address: #{e.message}")
  end
end
