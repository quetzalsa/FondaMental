require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playdiez" do
    get playlist_playdiez_url
    assert_response :success
  end

end
