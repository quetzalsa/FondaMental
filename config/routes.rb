Rails.application.routes.draw do

  get "/fotos" => "fonda_mental#fotos"
  get "/media" => "fonda_mental#media"
  get "/videos" => "fonda_mental#videos"
  get "/fonda_mental" => "fonda_mental#fonda_mental"
  root "player#player"
  get 'fonda_mental/sobre_nosotros'
  get "/eventos" => "fonda_mental#eventos"
  get "/blog" => "fonda_mental#blog"
  get "/sobre_nosotros" => "fonda_mental#sobre_nosotros"

 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
