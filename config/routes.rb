Rails.application.routes.draw do

  get 'galery/soul_station'

  get 'galery/asylum'

  get 'galery/abracadabra'

  get 'galery/abrecielo'

  get 'records/jean_madry'

  get 'records/lisa_cropp'

  get 'records/deniroster'

  get '/records/infos' => 'records#concepto'

  get '/records/fechas' => 'records#fechas'

  get '/records/djs' => 'records#djs'

  get '/fonda_mental/historia' => 'fonda#historia'

  get '/fonda_mental/quienes_somos' => 'fonda#quienes_somos'

  get 'home' => 'home#princ'

  get '/galeria/sintomas_dieciocheros' => 'galery#sintomas_dieciocheros'

  get '/galeria/el_llamado_del_desierto' => 'galery#el_llamado_del_desierto'
 
  get '/galeria/flower_power' => 'galery#flower_power'

  get '/galeria/in_the_woods_for_love' => 'galery#in_the_woods_for_love'

  get '/galeria/libera_musica' => 'galery#libera_musica'

  get '/galeria/camino_marginal' => 'galery#camino_marginal'

  get '/galeria/les_annes_folles' => 'galery#les_annes_folles'

  get '/galeria/red_light' => 'galery#red_light'

  get '/galeria/femmes_fatales' => 'galery#femmes_fatales'

  get '/galeria/technorama'  => 'galery#technorama'

  get '/galeria/physical' => 'galery#physical'

  get '/galeria/free_fall' => 'galery#free_fall'

  get '/galeria/la_cour_des_miracles' => 'galery#la_cour_des_miracles'

  get '/galeria/furia_patria' => 'galery#furia_patria'

  get '/galeria/abrecielo' => 'galery#abrecielo'

  get '/galeria/street_life' => 'galery#street_life'

  get '/galeria/abracadabra' => 'galery#abracadabra'

  get "/fotos" => "fonda_mental#fotos"
  get "/galeria" => "fonda_mental#media"
  get "/videos" => "fonda_mental#videos"
  
  root "home#home"
  get 'fonda_mental/sobre_nosotros'
  get "/eventos" => "fonda_mental#eventos"
  get "/blog" => "fonda_mental#blog"
  get "/sobre_nosotros" => "fonda_mental#sobre_nosotros"



 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
