Rails.application.routes.draw do
  # resources :photos
  scope :photos do
    post '/generate', to: 'photos#generate'
    get '/random', to: 'photos#random'
  end
end
