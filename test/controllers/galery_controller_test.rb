require 'test_helper'

class GaleryControllerTest < ActionDispatch::IntegrationTest
  test "should get cuartoscuro" do
    get galery_cuartoscuro_url
    assert_response :success
  end

end
