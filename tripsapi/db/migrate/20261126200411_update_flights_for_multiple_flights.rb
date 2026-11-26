class UpdateFlightsForMultipleFlights < ActiveRecord::Migration[8.1]
  def change
    if index_exists?(:flights, [:trip_id, :user_id], unique: true)
      remove_index :flights, column: [:trip_id, :user_id]
      add_index :flights, [:trip_id, :user_id]
    end

    remove_column :flights, :arrival_date, :date
    remove_column :flights, :arrival_flight_number, :string
    remove_column :flights, :arrival_origin, :string
    remove_column :flights, :departure_date, :date
    remove_column :flights, :departure_flight_number, :string
    remove_column :flights, :departure_destination, :string

    add_column :flights, :flight_number, :string
    add_column :flights, :departure_airport, :string
    add_column :flights, :arrival_airport, :string
    add_column :flights, :departure_time, :datetime
    add_column :flights, :arrival_time, :datetime
  end
end
