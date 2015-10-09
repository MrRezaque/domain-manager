class AddNullConstraintsToResource < ActiveRecord::Migration
  def change
    change_column_null :resources, :name, false
    change_column_null :resources, :keywords, false
    change_column_null :resources, :status, false
  end
end
