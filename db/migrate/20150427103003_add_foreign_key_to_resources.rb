class AddForeignKeyToResources < ActiveRecord::Migration
  def change
    add_column :resources, :keylist_id, :integer
    change_column_null :resources, :keylist_id, false
    add_index  :resources, :keylist_id
  end
end
