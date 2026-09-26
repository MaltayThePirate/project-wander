class CreateDayPlansAndDayPlanSpots < ActiveRecord::Migration[8.1]
  def change
    create_table :day_plans do |t|
      t.references :trip, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.date :date, null: false

      t.timestamps
    end

    add_index :day_plans, [ :trip_id, :user_id, :date ], unique: true, name: 'index_day_plans_on_trip_user_and_date'

    create_table :day_plan_spots do |t|
      t.references :day_plan, null: false, foreign_key: true
      t.references :spot, null: false, foreign_key: true
      t.integer :rank, null: false, default: 0

      t.timestamps
    end

    add_index :day_plan_spots, [ :day_plan_id, :spot_id ], unique: true, name: 'index_day_plan_spots_on_day_plan_and_spot'
  end
end

