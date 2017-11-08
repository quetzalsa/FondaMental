require 'test_helper'

class FondaControllerTest < ActionDispatch::IntegrationTest
  test "should get historia" do
    get fonda_historia_url
    assert_response :success
  end

  test "should get quienes_somos" do
    get fonda_quienes_somos_url
    assert_response :success
  end

end
