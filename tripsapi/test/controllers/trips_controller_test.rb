require "test_helper"

class TripsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(name: "Alice", email: "alice@example.com")
    @trip = Trip.create!(name: "Tokyo Trip", start_date: "2026-10-01", end_date: "2026-10-10")
    @trip.users << @user
  end

  test "should update trip dates and name" do
    patch trip_url(@trip), params: {
      trip: { name: "Updated Tokyo Trip", start_date: "2026-10-05", end_date: "2026-10-15" }
    }, as: :json

    assert_response :success
    json = JSON.parse(response.body)
    assert_equal "Updated Tokyo Trip", json["name"]
    assert_equal "2026-10-05", json["start_date"]
    assert_equal "2026-10-15", json["end_date"]
  end

  test "should reject invalid trip dates where end_date < start_date" do
    patch trip_url(@trip), params: {
      trip: { start_date: "2026-10-15", end_date: "2026-10-10" }
    }, as: :json

    assert_response :unprocessable_entity
    json = JSON.parse(response.body)
    assert json["errors"].any? { |e| e.include?("End date") || e.include?("end_date") }
  end
end
