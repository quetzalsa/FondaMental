require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get uno" do
    get playlist_uno_url
    assert_response :success
  end

end
