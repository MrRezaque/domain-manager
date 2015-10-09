class GenerateController < ApplicationController
  def generate
    CheckDomainBanJob.new.perform
  end
end
