Rails.application.routes.draw do
  get '/auth/verify', to: 'authentication#verify'
  post '/auth/login', to: 'authentication#login'
  put '/customs/:custom_id', to: 'customs#add_custom_to_user'
  resources :customs
  resources :users, only: :create
  resources :surfboards, only: [:index, :show]

end




