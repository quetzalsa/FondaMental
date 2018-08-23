require 'test_helper'

class FondaMentalControllerTest < ActionDispatch::IntegrationTest
  test "should get colaboradores" do
    get fonda_mental_colaboradores_url
    assert_response :success
  end

end
