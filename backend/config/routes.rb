Rails.application.routes.draw do
  resources :restaurants
  resources :cities do
    resources :restaurants, only: [:index]
  end
  post "cities/:id/background", to: "cities#background"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
