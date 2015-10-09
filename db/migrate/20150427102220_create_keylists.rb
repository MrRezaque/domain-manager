class CreateKeylists < ActiveRecord::Migration
  def change
    create_table :keylists do |t|
      t.text :keywords
      t.boolean :active, default: true, null: false

      t.timestamps null: false
    end
  end
end
