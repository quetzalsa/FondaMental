require 'test_helper'

class GaleryControllerTest < ActionDispatch::IntegrationTest
  test "should get soul_station" do
    get galery_soul_station_url
    assert_response :success
  end

end
