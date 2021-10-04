Rails.application.routes.draw do
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :customs
  resources :surfboards, only: :index
  put '/customs/:custom_id', to: 'customs#add_custom_to_user'

end




