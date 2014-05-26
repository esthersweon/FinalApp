FinalApp::Application.routes.draw do
  root to: 'static_pages#root'
  get "about", to: 'static_pages#about'
  get "contact", to: 'static_pages#contact'

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :index, :create]

  namespace :api, defaults: { format: :json } do

    resources :members, except: [:new, :edit]

    resources :projects, except: [:new, :edit] do
      resources :phases, only: [:index, :create, :update, :destroy]
    end

    resources :phases, only: [:show, :update, :destroy] do
      resources :tasks, only: [:create, :index, :destroy]
    end

    resources :tasks, only: [:show, :update]

  end

end
