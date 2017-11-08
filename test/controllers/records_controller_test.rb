require 'test_helper'

class RecordsControllerTest < ActionDispatch::IntegrationTest
  test "should get concepto" do
    get records_concepto_url
    assert_response :success
  end

  test "should get djs" do
    get records_djs_url
    assert_response :success
  end

end
