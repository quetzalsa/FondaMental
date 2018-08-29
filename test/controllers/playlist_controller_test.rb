require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playtres" do
    get playlist_playtres_url
    assert_response :success
  end

end
