class CreateFlights < ActiveRecord::Migration[8.1]
  def change
    create_table :flights do |t|
      t.references :trip, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.datetime :arrival_date
      t.string :arrival_flight_number
      t.string :arrival_origin
      t.datetime :departure_date
      t.string :departure_flight_number
      t.string :departure_destination

      t.timestamps
    end

    add_index :flights, [:trip_id, :user_id], unique: true
  end
end
