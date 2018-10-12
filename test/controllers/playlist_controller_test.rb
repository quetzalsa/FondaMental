require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playdoce" do
    get playlist_playdoce_url
    assert_response :success
  end

end
