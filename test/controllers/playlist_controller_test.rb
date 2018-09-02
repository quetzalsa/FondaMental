require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playcuatro" do
    get playlist_playcuatro_url
    assert_response :success
  end

end
