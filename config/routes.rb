DreamJournal::Application.routes.draw do
  resources :users
  #7. replace get "users/new" to get REST-style URI to work, adds a working
  #/users/1 URI, but also endows the app with ALL the actions for RESTful User
  #resource, along with named routes.

  resources :sessions, only: [:new, :create, :destroy]
  resources :posts, only: [:create, :destroy]


  root              to: 'static_pages#home'

  match '/signup',  to: 'users#new'
  match '/signin',  to: 'sessions#new'
  match '/signout', to: 'sessions#destroy', via: :delete
  match '/help',    to: 'static_pages#help'
  match '/about',   to: 'static_pages#about'
  match '/contact', to: 'static_pages#contact'

end
