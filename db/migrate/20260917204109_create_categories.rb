class CreateCategories < ActiveRecord::Migration[8.1]
  def change
    create_table :categories do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :name
      t.string :color

      t.timestamps
    end
  end
end
