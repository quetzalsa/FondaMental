require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playonce" do
    get playlist_playonce_url
    assert_response :success
  end

end
