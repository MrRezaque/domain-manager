class CreateForbiddenResources < ActiveRecord::Migration
  def change
    create_table :forbidden_resources do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
    add_index :forbidden_resources, :name, unique: true
  end
end
