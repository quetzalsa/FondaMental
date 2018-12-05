require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playdiezyocho" do
    get playlist_playdiezyocho_url
    assert_response :success
  end

end
