class CreateDomains < ActiveRecord::Migration
  def change
    create_table :domains do |t|
      t.string :name
      t.text :keywords
      t.string :status
      t.string :active_from
      t.string :banned_at

      t.timestamps null: false
    end
    add_index :domains, :name, unique: true
  end
end
