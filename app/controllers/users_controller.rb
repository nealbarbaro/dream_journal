class UsersController < ApplicationController
  def show #7
    @user = User.find(params[:id])
  end

  def new #7 for the signup page, next add create for form submission
    @user = User.new
  end

  def create #7 for the signup page submission, a POST request to /users URI
    @user = User.new(params[:user])
    if @user.save
      sign_in @user
      flash[:sucess] = "Welcome to the Lucid Dream Journal!"
      # Handle a successful save, remember .save returns true or false
      redirect_to @user
        #don't have to write user_url in redirect
    else
      render 'new'
    end
  end
end
