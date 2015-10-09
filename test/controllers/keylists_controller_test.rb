require 'test_helper'

class KeylistsControllerTest < ActionController::TestCase
  setup do
    @keylist = keylists(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:keylists)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create keylist" do
    assert_difference('Keylist.count') do
      post :create, keylist: { active: @keylist.active, keywords: @keylist.keywords }
    end

    assert_redirected_to keylist_path(assigns(:keylist))
  end

  test "should show keylist" do
    get :show, id: @keylist
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @keylist
    assert_response :success
  end

  test "should update keylist" do
    patch :update, id: @keylist, keylist: { active: @keylist.active, keywords: @keylist.keywords }
    assert_redirected_to keylist_path(assigns(:keylist))
  end

  test "should destroy keylist" do
    assert_difference('Keylist.count', -1) do
      delete :destroy, id: @keylist
    end

    assert_redirected_to keylists_path
  end
end
