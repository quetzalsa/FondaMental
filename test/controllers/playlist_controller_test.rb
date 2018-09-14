require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playsiete" do
    get playlist_playsiete_url
    assert_response :success
  end

end
