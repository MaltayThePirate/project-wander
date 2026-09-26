class AddPhotoReferenceToSpots < ActiveRecord::Migration[8.1]
  def change
    add_column :spots, :photo_reference, :string
  end
end
