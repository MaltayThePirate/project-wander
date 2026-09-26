Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  resources :trips, only: [ :create, :show ] do
    resources :spots, only: [ :index, :create ] do
      member do
        get :photo
      end
    end
    resources :categories, only: [ :index, :create ]
    get "day-plans/:member_id/:date", to: "day_plans#show", constraints: { date: /\d{4}-\d{2}-\d{2}/ }
    post "day-plans/:member_id/:date", to: "day_plans#create", constraints: { date: /\d{4}-\d{2}-\d{2}/ }
  end

  # Defines the root path route ("/")
  # root "posts#index"
end
