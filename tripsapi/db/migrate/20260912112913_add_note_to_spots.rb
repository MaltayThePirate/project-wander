class AddNoteToSpots < ActiveRecord::Migration[8.1]
  def change
    add_column :spots, :note, :text
  end
end
