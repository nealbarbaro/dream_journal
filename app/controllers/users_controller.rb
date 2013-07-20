class UsersController < ApplicationController
  before_filter :signed_in_user, only: [:edit, :update]
  before_filter :correct_user,   only: [:edit, :update]
  before_filter :admin_user,     only: [:index, :destroy]

  def show
    @user = User.find(params[:id])
    @posts = @user.posts.paginate(page: params[:page])
    @feed_items = current_user.posts.paginate(page: params[:page])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      sign_in @user
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    if @user = User.find(params[:id])
      flash[:success] = "Profile updated"
      sign_in @user
      redirect_to root_path
    else
      render 'edit'
    end
  end

  def index
    @users = User.paginate(page: params[:page])
  end

   def destroy
    User.find(params[:id]).destroy
    flash[:success] = "User destroyed."
    redirect_to users_url
  end

  private

    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_path) unless current_user?(@user)
    end

    def admin_user
      redirect_to(root_path) unless current_user.admin?
    end

end
