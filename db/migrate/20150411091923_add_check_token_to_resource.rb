class AddCheckTokenToResource < ActiveRecord::Migration
  def change
    add_column :resources, :check_token, :text
  end
end
