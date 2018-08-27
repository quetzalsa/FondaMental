require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get podcast" do
    get playlist_podcast_url
    assert_response :success
  end

end
