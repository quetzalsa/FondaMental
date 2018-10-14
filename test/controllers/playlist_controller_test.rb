require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playtrece" do
    get playlist_playtrece_url
    assert_response :success
  end

end
