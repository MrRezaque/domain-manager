require 'test_helper'

class ResourceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test 'model banned' do
    res = resources(:active_one)
    res.ban
    assert res.status == 'banned', 'model not banned'
  end

  test 'model activete' do
    res = resources(:active_one)
    res.activate
    assert res.status == 'active', 'model not activated'
  end

end
