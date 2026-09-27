require "test_helper"

class AccommodationTest < ActiveSupport::TestCase
  setup do
    @trip = Trip.create!(name: "Tokyo Trip", start_date: "2026-10-01", end_date: "2026-10-10")
  end

  test "valid accommodation" do
    acc = @trip.accommodations.new(
      name: "Hotel Shibuya",
      address: "1-1-1 Shibuya",
      start_date: "2026-10-01",
      end_date: "2026-10-05"
    )
    assert acc.valid?
  end

  test "invalid when end date before start date" do
    acc = @trip.accommodations.new(
      name: "Hotel Shibuya",
      start_date: "2026-10-05",
      end_date: "2026-10-01"
    )
    assert_not acc.valid?
    assert_includes acc.errors[:end_date], "must be on or after the start date"
  end
end
