require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playocho" do
    get playlist_playocho_url
    assert_response :success
  end

end
