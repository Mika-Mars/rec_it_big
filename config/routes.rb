Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :projects, except: %i[edit new] do
    patch :note
    resources :voice_records, only: %i[create index destroy]
  end
end
