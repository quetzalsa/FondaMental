require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playcinco" do
    get playlist_playcinco_url
    assert_response :success
  end

end
