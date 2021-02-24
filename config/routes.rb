Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show, :create, :update, :destroy] do
      post :create_like
      delete :destroy_like
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:update, :destroy] do
      post :create_like
      delete :destroy_like
    end
    get :search, controller: 'videos'
  end

  get '/api/session/google', :to => 'api/sessions#google_sign_in'
end
