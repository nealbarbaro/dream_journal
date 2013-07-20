class StaticPagesController < ApplicationController
  def home
    if signed_in?
      @post = current_user.posts.build if signed_in?
      @posts = current_user.posts.paginate(page: params[:page])
    end
  end

  def about
  end

  def help
  end

  def contact
  end
end
