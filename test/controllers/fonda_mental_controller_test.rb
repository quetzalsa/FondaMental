require 'test_helper'

class FondaMentalControllerTest < ActionDispatch::IntegrationTest
  test "should get fonda_mental" do
    get fonda_mental_fonda_mental_url
    assert_response :success
  end

  test "should get sobre_nosotros" do
    get fonda_mental_sobre_nosotros_url
    assert_response :success
  end

  test "should get eventos" do
    get fonda_mental_eventos_url
    assert_response :success
  end

  test "should get media" do
    get fonda_mental_media_url
    assert_response :success
  end

  test "should get shop" do
    get fonda_mental_shop_url
    assert_response :success
  end

  test "should get blog" do
    get fonda_mental_blog_url
    assert_response :success
  end

end
