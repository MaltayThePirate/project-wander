class CreateSpots < ActiveRecord::Migration[8.1]
  def change
    create_table :spots do |t|
      t.references :trip, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :name, null: false
      t.string :address
      t.string :source_url, null: false
      t.string :source_provider, null: false

      # st_point - lat/long column type from activerecord
      #   srid(spatial reference system identifier): 4326 = WGS 84 (standard lat/long used by GPS)
      t.st_point :location, geographic: true, srid: 4326, null: false

      t.timestamps
    end
  end
end
