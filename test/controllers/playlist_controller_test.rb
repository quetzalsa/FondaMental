require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playdos" do
    get playlist_playdos_url
    assert_response :success
  end

end
