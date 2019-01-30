require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playveintiuno" do
    get playlist_playveintiuno_url
    assert_response :success
  end

end
