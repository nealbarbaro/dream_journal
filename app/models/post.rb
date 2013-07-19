# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  content    :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  lucid      :boolean          default(FALSE)
#

class Post < ActiveRecord::Base
  attr_accessible :content, :lucid
  belongs_to :user

  validates :user_id, presence: true
  validates :content, presence: true

  default_scope order: 'posts.created_at DESC'
end
