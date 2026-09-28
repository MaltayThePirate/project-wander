Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  devise_for :users,
    controllers: { omniauth_callbacks: "users/omniauth_callbacks" },
    skip: [:registrations, :passwords],   # sessions no longer skipped
    defaults: { format: :json }

  resources :trips, only: [ :index, :create, :show, :update ] do
    resources :spots, only: [ :index, :create, :destroy ] do
      member do
        get :photo
      end
    end
    resources :categories, only: [ :index, :create ]
    resource :flight, only: [ :show, :create, :update ]
    resources :accommodations, only: [ :index, :create, :update, :destroy ]
    get "day-plans/:member_id", to: "day_plans#index", as: :trip_day_plans_index, constraints: { member_id: /\d+/ }
    get "day-plans/:member_id/:date", to: "day_plans#show", as: :trip_day_plan, constraints: { date: /\d{4}-\d{2}-\d{2}/ }
    put "day-plans/:member_id/:date", to: "day_plans#update", as: :update_trip_day_plan, constraints: { date: /\d{4}-\d{2}-\d{2}/ }
  end

  # Defines the root path route ("/")
  # root "posts#index"
end
