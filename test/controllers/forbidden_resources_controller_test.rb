# require 'test_helper'
#
# class ForbiddenResourcesControllerTest < ActionController::TestCase
#   setup do
#     @forbidden_resource = forbidden_resources(:one)
#   end
#
#   test "should get index" do
#     get :index
#     assert_response :success
#     assert_not_nil assigns(:forbidden_resources)
#   end
#
#   test "should get new" do
#     get :new
#     assert_response :success
#   end
#
#   test "should create forbidden_resource" do
#     assert_difference('ForbiddenResource.count') do
#       post :create, forbidden_resource: { name: @forbidden_resource.name }
#     end
#
#     assert_redirected_to forbidden_resource_path(assigns(:forbidden_resource))
#   end
#
#   test "should show forbidden_resource" do
#     get :show, id: @forbidden_resource
#     assert_response :success
#   end
#
#   test "should get edit" do
#     get :edit, id: @forbidden_resource
#     assert_response :success
#   end
#
#   test "should update forbidden_resource" do
#     patch :update, id: @forbidden_resource, forbidden_resource: { name: @forbidden_resource.name }
#     assert_redirected_to forbidden_resource_path(assigns(:forbidden_resource))
#   end
#
#   test "should destroy forbidden_resource" do
#     assert_difference('ForbiddenResource.count', -1) do
#       delete :destroy, id: @forbidden_resource
#     end
#
#     assert_redirected_to forbidden_resources_path
#   end
# end
