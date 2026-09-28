require "test_helper"

class SpotsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.first_or_create!(email: "neil@example.com", name: "Neil")
    @other_user = User.create!(name: "Charlie", email: "charlie@example.com")
    @trip = Trip.create!(name: "Kyoto Trip", start_date: "2026-11-01", end_date: "2026-11-05")
    @trip.users << @user

    factory = RGeo::Geographic.spherical_factory(srid: 4326)
    @point = factory.point(135.7681, 35.0116)
  end

  test "should delete spot if owned by current_user and not in day plan" do
    spot = Spot.create!(
      trip: @trip,
      user: @user,
      name: "Kinkaku-ji",
      address: "Kyoto",
      location: @point,
      source_url: "https://maps.google.com/?q=Kinkaku",
      source_provider: "google"
    )

    assert_difference("Spot.count", -1) do
      delete trip_spot_url(@trip, spot), headers: auth_headers_for(@user), as: :json
    end

    assert_response :no_content
  end

  test "should forbid deleting spot if owned by another user" do
    spot = Spot.create!(
      trip: @trip,
      user: @other_user,
      name: "Gion",
      address: "Kyoto",
      location: @point,
      source_url: "https://maps.google.com/?q=Gion",
      source_provider: "google"
    )

    assert_no_difference("Spot.count") do
      delete trip_spot_url(@trip, spot), headers: auth_headers_for(@user), as: :json
    end

    assert_response :forbidden
  end

  test "should prevent deleting spot if in a day plan" do
    spot = Spot.create!(
      trip: @trip,
      user: @user,
      name: "Kinkaku-ji",
      address: "Kyoto",
      location: @point,
      source_url: "https://maps.google.com/?q=Kinkaku",
      source_provider: "google"
    )

    day_plan = DayPlan.create!(trip: @trip, user: @user, date: "2026-11-02")
    DayPlanSpot.create!(day_plan: day_plan, spot: spot, rank: 0)

    assert_no_difference("Spot.count") do
      delete trip_spot_url(@trip, spot), headers: auth_headers_for(@user), as: :json
    end

    assert_response :unprocessable_entity
    json = JSON.parse(response.body)
    assert json["error"].include?("day plan")
  end
end
