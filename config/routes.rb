Rails.application.routes.draw do
  get 'fonda_mental/fonda_mental'
  get "/fonda_mental" => "fonda_mental#fonda_mental"
  root "player#player"
  get 'fonda_mental/sobre_nosotros'

  get 'fonda_mental/eventos'

  get 'fonda_mental/media'

  get 'fonda_mental/shop'

  get 'fonda_mental/blog'

  get 'player/player'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
