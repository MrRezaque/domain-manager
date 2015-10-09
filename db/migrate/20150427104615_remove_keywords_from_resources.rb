class RemoveKeywordsFromResources < ActiveRecord::Migration
  def change
    remove_column :resources, :keywords
  end
end
