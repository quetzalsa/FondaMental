require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playdiezysiete" do
    get playlist_playdiezysiete_url
    assert_response :success
  end

end
