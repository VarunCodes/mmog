Rails.application.routes.draw do
  resources :avatars
  resources :messages
  resources :chat_rooms, only: [:new, :create, :show, :index]
  get '/game', :controller => 'games', :action => 'game'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
  root to: "chat_rooms#index"
end
