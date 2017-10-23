require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get princ" do
    get home_princ_url
    assert_response :success
  end

end
