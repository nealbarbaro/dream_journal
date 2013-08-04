module UsersHelper
  # Returns Gravatar for the given user.
  def gravatar_for(user)
    unless current_user.guest?
      gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
      gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
      image_tag(gravatar_url, alt: user.name, class: "gravatar")
    end
  end
end
