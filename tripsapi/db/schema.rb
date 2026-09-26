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

ActiveRecord::Schema[8.1].define(version: 2026_09_26_041726) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"
  enable_extension "postgis"

  create_table "categories", force: :cascade do |t|
    t.string "color", null: false
    t.datetime "created_at", null: false
    t.string "name", null: false
    t.bigint "trip_id", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id", "name"], name: "index_categories_on_trip_id_and_name", unique: true
    t.index ["trip_id"], name: "index_categories_on_trip_id"
  end

  create_table "day_plan_spots", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "day_plan_id", null: false
    t.integer "rank", default: 0, null: false
    t.bigint "spot_id", null: false
    t.datetime "updated_at", null: false
    t.index ["day_plan_id", "spot_id"], name: "index_day_plan_spots_on_day_plan_and_spot", unique: true
    t.index ["day_plan_id"], name: "index_day_plan_spots_on_day_plan_id"
    t.index ["spot_id"], name: "index_day_plan_spots_on_spot_id"
  end

  create_table "day_plans", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.date "date", null: false
    t.bigint "trip_id", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["trip_id", "user_id", "date"], name: "index_day_plans_on_trip_user_and_date", unique: true
    t.index ["trip_id"], name: "index_day_plans_on_trip_id"
    t.index ["user_id"], name: "index_day_plans_on_user_id"
  end

  create_table "spot_categories", force: :cascade do |t|
    t.bigint "category_id", null: false
    t.datetime "created_at", null: false
    t.bigint "spot_id", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_spot_categories_on_category_id"
    t.index ["spot_id", "category_id"], name: "index_spot_categories_on_spot_id_and_category_id", unique: true
    t.index ["spot_id"], name: "index_spot_categories_on_spot_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "address"
    t.datetime "created_at", null: false
    t.geography "location", limit: {srid: 4326, type: "st_point", geographic: true}, null: false
    t.string "name", null: false
    t.text "note"
    t.string "photo_reference"
    t.string "source_provider", null: false
    t.string "source_url", null: false
    t.bigint "trip_id", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["trip_id"], name: "index_spots_on_trip_id"
    t.index ["user_id"], name: "index_spots_on_user_id"
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

  add_foreign_key "categories", "trips"
  add_foreign_key "day_plan_spots", "day_plans"
  add_foreign_key "day_plan_spots", "spots"
  add_foreign_key "day_plans", "trips"
  add_foreign_key "day_plans", "users"
  add_foreign_key "spot_categories", "categories"
  add_foreign_key "spot_categories", "spots"
  add_foreign_key "spots", "trips"
  add_foreign_key "spots", "users"
  add_foreign_key "trip_memberships", "trips"
  add_foreign_key "trip_memberships", "users"
end
