Rails.application.routes.draw do
  get '/auth/verify', to: 'authentication#verify'
  post '/auth/login', to: 'authentication#login'

  resources :customs
  resources :users, only: :create
  resources :surfboards, only: [:index, :show]

end




