require 'test_helper'

class GaleryControllerTest < ActionDispatch::IntegrationTest
  test "should get sintomas_dieziocheros" do
    get galery_sintomas_dieziocheros_url
    assert_response :success
  end

  test "should get el_llamado_del_desierto" do
    get galery_el_llamado_del_desierto_url
    assert_response :success
  end

  test "should get flower_power" do
    get galery_flower_power_url
    assert_response :success
  end

  test "should get in_the_woods_for_love" do
    get galery_in_the_woods_for_love_url
    assert_response :success
  end

  test "should get libera_musica" do
    get galery_libera_musica_url
    assert_response :success
  end

  test "should get camino_marginal" do
    get galery_camino_marginal_url
    assert_response :success
  end

  test "should get les_annes_foller" do
    get galery_les_annes_foller_url
    assert_response :success
  end

  test "should get red_light" do
    get galery_red_light_url
    assert_response :success
  end

  test "should get femmes_fatales" do
    get galery_femmes_fatales_url
    assert_response :success
  end

  test "should get technorama" do
    get galery_technorama_url
    assert_response :success
  end

  test "should get pyhsical" do
    get galery_pyhsical_url
    assert_response :success
  end

  test "should get free_fall" do
    get galery_free_fall_url
    assert_response :success
  end

  test "should get la_cour_des_miracles" do
    get galery_la_cour_des_miracles_url
    assert_response :success
  end

  test "should get furia_patria" do
    get galery_furia_patria_url
    assert_response :success
  end

end
