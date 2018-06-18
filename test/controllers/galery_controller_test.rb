require 'test_helper'

class GaleryControllerTest < ActionDispatch::IntegrationTest
  test "should get street_life_valpo" do
    get galery_street_life_valpo_url
    assert_response :success
  end

end
