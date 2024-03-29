# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150427174745) do

  create_table "crono_jobs", force: :cascade do |t|
    t.string   "job_id",            null: false
    t.text     "log"
    t.datetime "last_performed_at"
    t.boolean  "healthy"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "crono_jobs", ["job_id"], name: "index_crono_jobs_on_job_id", unique: true

  create_table "forbidden_resources", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "forbidden_resources", ["name"], name: "index_forbidden_resources_on_name", unique: true

  create_table "keylists", force: :cascade do |t|
    t.text     "keywords"
    t.boolean  "active",     default: true, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "resources", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "status",      null: false
    t.string   "active_from"
    t.string   "banned_at"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "check_token"
    t.integer  "keylist_id",  null: false
  end

  add_index "resources", ["keylist_id"], name: "index_resources_on_keylist_id"
  add_index "resources", ["name"], name: "index_resources_on_name", unique: true

end
