require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playcatorce" do
    get playlist_playcatorce_url
    assert_response :success
  end

end
