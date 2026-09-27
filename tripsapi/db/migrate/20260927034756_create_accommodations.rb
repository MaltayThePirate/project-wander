class CreateAccommodations < ActiveRecord::Migration[8.1]
  def change
    create_table :accommodations do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :name, null: false
      t.string :address
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.boolean :active, null: false, default: true

      t.timestamps
    end
  end
end
