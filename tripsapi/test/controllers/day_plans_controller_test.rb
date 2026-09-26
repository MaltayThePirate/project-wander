require "test_helper"

class DayPlansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(name: "Bob", email: "bob@example.com")
    @trip = Trip.create!(name: "Kyoto Trip", start_date: "2026-11-01", end_date: "2026-11-05")
    @trip.users << @user

    factory = RGeo::Geographic.spherical_factory(srid: 4326)
    point = factory.point(135.7681, 35.0116)

    @spot = Spot.create!(
      trip: @trip,
      user: @user,
      name: "Kinkaku-ji",
      address: "Kyoto, Japan",
      location: point,
      source_url: "https://maps.google.com/?q=Kinkaku-ji",
      source_provider: "google"
    )
  end

  test "should get empty day plan when none exists" do
    get "/trips/#{@trip.id}/day-plans/#{@user.id}/2026-11-02"
    assert_response :success
    json = JSON.parse(response.body)
    assert_nil json["day_plan"]
    assert_empty json["spots"]
  end

  test "should create or update day plan spots and ranking" do
    put "/trips/#{@trip.id}/day-plans/#{@user.id}/2026-11-02", params: {
      spots: [
        { spot_id: @spot.id, rank: 0 }
      ]
    }, as: :json

    assert_response :success
    json = JSON.parse(response.body)
    assert_equal @trip.id, json["trip_id"]
    assert_equal @user.id, json["member_id"]
    assert_equal "2026-11-02", json["date"]
    assert_equal 1, json["spots"].length
    assert_equal @spot.id, json["spots"][0]["id"]
    assert_equal 0, json["spots"][0]["rank"]
  end
end
