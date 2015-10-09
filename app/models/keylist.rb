class Keylist < ActiveRecord::Base

  has_many :resources, dependent: :destroy

  # accepts_nested_attributes_for :resources,
  #                               :reject_if => lambda { |resource| resource[:name].blank? }

end
