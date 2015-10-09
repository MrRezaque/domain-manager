class Resource < ActiveRecord::Base

  belongs_to :keylist

  #add default schema to resource if absent
  before_save do |resource|
    if resource.name !~ /^\S{1,10}:\/\//
      resource.name = 'http://' + resource.name
    end
    resource.name = resource.name.downcase
  end

  #set default status if absent
  before_save do |resource|
    resource.status = 'pending' if resource.status.blank?
  end


  def activate
    if self.status != 'active'
      self.status = 'active'
      self.active_from = Time.now
    end
    self.save
  end

  def ban
    if self.status != 'banned'
      self.status = 'banned'
      self.banned_at = Time.now
    end
    self.save
  end

end
