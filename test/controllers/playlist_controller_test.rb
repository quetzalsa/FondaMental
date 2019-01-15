require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playveinte" do
    get playlist_playveinte_url
    assert_response :success
  end

end
