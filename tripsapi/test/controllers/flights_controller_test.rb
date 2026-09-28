require "test_helper"

class FlightsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.first_or_create!(name: "Neil", email: "neil@example.com")
    @trip = Trip.create!(name: "Tokyo Trip", start_date: "2026-10-01", end_date: "2026-10-10")
    @trip.users << @user unless @trip.users.include?(@user)
  end

  test "should get flight details when none created" do
    get trip_flight_url(@trip), headers: auth_headers_for(@user), as: :json
    assert_response :success
    json = JSON.parse(response.body)
    assert_nil json["flight"]
  end

  test "should create and update flight details" do
    post trip_flight_url(@trip), headers: auth_headers_for(@user), params: {
      flight: {
        arrival_date: "2026-09-30T15:30:00Z",
        arrival_flight_number: "JL001",
        arrival_origin: "SFO",
        departure_date: "2026-10-11T18:00:00Z",
        departure_flight_number: "JL002",
        departure_destination: "SFO"
      }
    }, as: :json

    assert_response :created
    json = JSON.parse(response.body)
    assert_equal "JL001", json["arrival_flight_number"]
    assert_equal "SFO", json["arrival_origin"]
    assert_equal "JL002", json["departure_flight_number"]
    assert_equal "SFO", json["departure_destination"]

    # Update via PUT
    put trip_flight_url(@trip), headers: auth_headers_for(@user), params: {
      flight: {
        arrival_date: "2026-10-01T10:00:00Z",
        arrival_flight_number: "JL003",
        arrival_origin: "LAX",
        departure_date: "2026-10-10T20:00:00Z",
        departure_flight_number: "JL004",
        departure_destination: "LAX"
      }
    }, as: :json

    assert_response :success
    json_updated = JSON.parse(response.body)
    assert_equal "JL003", json_updated["arrival_flight_number"]
    assert_equal "LAX", json_updated["arrival_origin"]
    assert_equal "JL004", json_updated["departure_flight_number"]
  end
end
