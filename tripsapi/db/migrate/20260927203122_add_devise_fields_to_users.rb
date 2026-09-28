class AddDeviseFieldsToUsers < ActiveRecord::Migration[8.1]
  def change
    add_column :users, :encrypted_password, :string, null: false, default: ""
    add_column :users, :provider, :string
    add_column :users, :uid, :string
    add_column :users, :jti, :string, null: false, default: -> { "gen_random_uuid()" }

    add_index :users, [:provider, :uid], unique: true
    add_index :users, :jti, unique: true
  end
end
