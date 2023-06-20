Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?

  root 'homepage#index'

  get '*path', to: 'homepage#index', via: :all

  resources :referrals, only: [:index, :create]

  namespace :api do
    namespace :v1 do
      get '/user_referrals', to: 'referrals#user_referrals'
      post '/referrals', to: 'referrals#create'
    end
  end  
end
