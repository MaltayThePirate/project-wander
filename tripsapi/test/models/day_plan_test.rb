require "test_helper"

class DayPlanTest < ActiveSupport::TestCase
  setup do
    @user = User.create!(name: "Alice", email: "alice@example.com")
    @trip = Trip.create!(name: "Tokyo Trip", start_date: "2026-10-01", end_date: "2026-10-05")
    @trip.users << @user
  end

  test "valid day plan within trip window" do
    day_plan = DayPlan.new(trip: @trip, user: @user, date: "2026-10-02")
    assert day_plan.valid?
  end

  test "invalid day plan outside trip window" do
    day_plan = DayPlan.new(trip: @trip, user: @user, date: "2026-09-30")
    assert_not day_plan.valid?
    assert_includes day_plan.errors[:date], "must be within the trip window (2026-10-01 to 2026-10-05)"
  end

  test "unique day plan per user per trip per date" do
    DayPlan.create!(trip: @trip, user: @user, date: "2026-10-02")
    duplicate = DayPlan.new(trip: @trip, user: @user, date: "2026-10-02")
    assert_not duplicate.valid?
  end
end
