require 'test_helper'

class ResourceCheckJobTestJobTest < ActiveJob::TestCase
  # test "the truth" do
  #   assert true
  # end
  test 'overall test' do
    Rails.env = 'test'
    CheckDomainBanJob.new.perform
  end
end
