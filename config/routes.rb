Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :projects, except: %i[new] do
    patch :notes
    resources :voice_records, only: %i[create index update destroy]
  end
end
