class AddIndexesAndNullConstraintsToCategories < ActiveRecord::Migration[8.1]
  def change
    change_column_null :categories, :name, false
    change_column_null :categories, :color, false
    add_index :categories, [:trip_id, :name], unique: true unless index_exists?(:categories, [:trip_id, :name])
    add_index :spot_categories, [:spot_id, :category_id], unique: true unless index_exists?(:spot_categories, [:spot_id, :category_id])
  end
end
