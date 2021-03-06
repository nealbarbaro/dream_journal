class PostsController < ApplicationController
  before_filter :signed_in_user, only: [:create, :destroy, :update]
  before_filter :correct_user,   only: [:destroy, :update]


  def index
  end

  def create
    @post = current_user.posts.build(params[:post])

    respond_to do |format|
      if @post.save
        format.html { redirect_to root_url }
        format.js # create.js.erb
      else
        format.html { flash[:error] = "Post cannot be blank."}
        format.js { render :nothing => true }
      end
    end
  end


  def edit
    @post =Post.find(params[:id])
  end

  def update
    @post = Post.find params[:id]
    @post.update_attributes(params[:post])
  end

  def destroy
    @post.destroy

    respond_to do |format|
      format.html {redirect_to root_url}
      format.js # destroy.js.erb
    end
  end

  def togglelucid
    @post = Post.find(params[:id])
    @post.toggle!(:lucid)
  end

  def night_modal
  end

  private

    def correct_user
      @post = current_user.posts.find_by_id(params[:id])
      redirect_to root_url if @post.nil?
    end

end