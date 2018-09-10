require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playseis" do
    get playlist_playseis_url
    assert_response :success
  end

end
