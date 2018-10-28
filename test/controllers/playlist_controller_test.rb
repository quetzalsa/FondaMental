require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playquince" do
    get playlist_playquince_url
    assert_response :success
  end

end
