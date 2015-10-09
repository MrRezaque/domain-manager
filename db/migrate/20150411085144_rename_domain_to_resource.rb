class RenameDomainToResource < ActiveRecord::Migration
  def change
    rename_table :domains, :resources
  end
end
