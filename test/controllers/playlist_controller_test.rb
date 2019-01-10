require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playdiezynueve" do
    get playlist_playdiezynueve_url
    assert_response :success
  end

end
