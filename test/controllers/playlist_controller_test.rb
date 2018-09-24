require 'test_helper'

class PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get playnueve" do
    get playlist_playnueve_url
    assert_response :success
  end

end
