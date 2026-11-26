require "test_helper"

class TripsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(name: "Alice", email: "alice@example.com")
    @trip = Trip.create!(name: "Tokyo Trip", start_date: "2026-10-01", end_date: "2026-10-10")
    @trip.users << @user
  end

  test "should update trip dates and name" do
    patch trip_url(@trip), headers: auth_headers_for(@user), params: {
      trip: { name: "Updated Tokyo Trip", start_date: "2026-10-05", end_date: "2026-10-15" }
    }, as: :json

    assert_response :success
    json = JSON.parse(response.body)
    assert_equal "Updated Tokyo Trip", json["name"]
    assert_equal "2026-10-05", json["start_date"]
    assert_equal "2026-10-15", json["end_date"]
  end

  test "should reject invalid trip dates where end_date < start_date" do
    patch trip_url(@trip), headers: auth_headers_for(@user), params: {
      trip: { start_date: "2026-10-15", end_date: "2026-10-10" }
    }, as: :json

    assert_response :unprocessable_entity
    json = JSON.parse(response.body)
    assert json["errors"].any? { |e| e.include?("End date") || e.include?("end_date") }
  end

  test "should reject updating trip dates if day plans with spots fall outside new range" do
    factory = RGeo::Geographic.spherical_factory(srid: 4326)
    point = factory.point(139.6917, 35.6895)
    spot = Spot.create!(
      trip: @trip,
      user: @user,
      name: "Tokyo Tower",
      address: "Tokyo",
      location: point,
      source_url: "https://maps.google.com/?q=Tokyo+Tower",
      source_provider: "google"
    )

    day_plan = DayPlan.create!(trip: @trip, user: @user, date: "2026-10-02")
    DayPlanSpot.create!(day_plan: day_plan, spot: spot, rank: 0)

    patch trip_url(@trip), headers: auth_headers_for(@user), params: {
      trip: { start_date: "2026-10-05", end_date: "2026-10-10" }
    }, as: :json

    assert_response :unprocessable_entity
    json = JSON.parse(response.body)
    assert json["errors"].any? { |e| e.include?("day plans with spots outside") }
  end
end
