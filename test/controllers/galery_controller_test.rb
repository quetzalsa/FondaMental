require 'test_helper'

class GaleryControllerTest < ActionDispatch::IntegrationTest
  test "should get asylum" do
    get galery_asylum_url
    assert_response :success
  end

end
