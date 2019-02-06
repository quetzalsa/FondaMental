require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playveintydos" do
    get playlist_playveintydos_url
    assert_response :success
  end

end
