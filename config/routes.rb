Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?

  root 'homepage#index'

  namespace :api do
    namespace :v1 do
      get '/user_referrals', to: 'referrals#user_referrals'
      post '/referrals', to: 'referrals#create'
    end
  end

  get '*path', to: 'homepage#index', via: :all
end
