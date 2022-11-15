Rails.application.routes.draw do
  resources :restaurants
  resources :cities do
    resources :restaurants, only: [:index]
  end
  post "cities/:id/background", to: "cities#background"
end
