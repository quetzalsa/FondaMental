require 'test_helper'

class GaleryControllerTest < ActionDispatch::IntegrationTest
  test "should get traumer" do
    get galery_traumer_url
    assert_response :success
  end

end
