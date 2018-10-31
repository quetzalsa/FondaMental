require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playdiezyseis" do
    get playlist_playdiezyseis_url
    assert_response :success
  end

end
