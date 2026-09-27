require "test_helper"

class AccommodationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trip = Trip.create!(name: "Kyoto Trip", start_date: "2026-11-01", end_date: "2026-11-10")
  end

  test "should get index of accommodations" do
    @trip.accommodations.create!(name: "Hotel A", start_date: "2026-11-01", end_date: "2026-11-05")
    get trip_accommodations_url(@trip), as: :json
    assert_response :success
    json = JSON.parse(response.body)
    assert_equal 1, json.length
    assert_equal "Hotel A", json[0]["name"]
    assert_equal false, json[0]["overlapping"]
  end

  test "should detect overlapping accommodations and set flag" do
    @trip.accommodations.create!(name: "Hotel A", start_date: "2026-11-01", end_date: "2026-11-05")
    @trip.accommodations.create!(name: "Hotel B", start_date: "2026-11-04", end_date: "2026-11-08")

    get trip_accommodations_url(@trip), as: :json
    assert_response :success
    json = JSON.parse(response.body)
    assert_equal 2, json.length
    assert json[0]["overlapping"]
    assert json[1]["overlapping"]
  end

  test "should create accommodation" do
    assert_difference("Accommodation.count") do
      post trip_accommodations_url(@trip), params: {
        accommodation: {
          name: "Ryokan Kyoto",
          address: "Gion Kyoto",
          start_date: "2026-11-01",
          end_date: "2026-11-05",
          active: true
        }
      }, as: :json
    end
    assert_response :created
    json = JSON.parse(response.body)
    assert_equal "Ryokan Kyoto", json["name"]
    assert_equal true, json["active"]
  end

  test "should update accommodation active and dates" do
    acc = @trip.accommodations.create!(name: "Ryokan Kyoto", start_date: "2026-11-01", end_date: "2026-11-05", active: false)
    patch trip_accommodation_url(@trip, acc), params: {
      accommodation: {
        active: true,
        name: "Ryokan Updated"
      }
    }, as: :json
    assert_response :success
    json = JSON.parse(response.body)
    assert_equal true, json["active"]
    assert_equal "Ryokan Updated", json["name"]
  end

  test "should destroy accommodation" do
    acc = @trip.accommodations.create!(name: "Ryokan Kyoto", start_date: "2026-11-01", end_date: "2026-11-05")
    assert_difference("Accommodation.count", -1) do
      delete trip_accommodation_url(@trip, acc), as: :json
    end
    assert_response :no_content
  end
end
