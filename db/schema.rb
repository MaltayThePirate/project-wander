# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_08_19_021311) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"
  enable_extension "postgis"

  create_table "spatial_ref_sys", primary_key: "srid", id: :integer, default: nil, force: :cascade do |t|
    t.string "auth_name", limit: 256
    t.integer "auth_srid"
    t.string "proj4text", limit: 2048
    t.string "srtext", limit: 2048
    t.check_constraint "srid > 0 AND srid <= 998999", name: "spatial_ref_sys_srid_check"
  end

  create_table "trip_memberships", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "trip_id", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["trip_id", "user_id"], name: "index_trip_memberships_on_trip_id_and_user_id", unique: true
    t.index ["trip_id"], name: "index_trip_memberships_on_trip_id"
    t.index ["user_id"], name: "index_trip_memberships_on_user_id"
  end

  create_table "trips", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.date "end_date", null: false
    t.string "name", null: false
    t.date "start_date", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "email", null: false
    t.string "name", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "trip_memberships", "trips"
  add_foreign_key "trip_memberships", "users"
end
