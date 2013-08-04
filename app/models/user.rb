# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  email           :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string(255)
#  remember_token  :string(255)
#  admin           :boolean          default(FALSE)
#  guest           :boolean
#

class User < ActiveRecord::Base
  has_many :posts, dependent: :destroy

  attr_accessible :email, :name, :password, :password_confirmation


  # before_save { |user| user.email = email.downcase }
  before_save :create_remember_token

  validates :name,  presence: true, length: { maximum: 40 }, unless: :guest?
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, unless: :guest?
  validates :password, presence: true, length: { minimum: 6 }, unless: :guest?
  validates :password_confirmation, presence: true, unless: :guest?
  validates :email, uniqueness: { allow_blank: true }

  validates_confirmation_of :password


  after_validation { self.errors.messages.delete(:password_digest) }
  # override has_secure_password to customize validation until Rails 4.
  require 'bcrypt'
  attr_reader :password
  include ActiveModel::SecurePassword::InstanceMethodsOnActivation

  def self.new_guest
    new { |u| u.guest = true }
  end

  def username
    guest ? "Guest Dreamer" : name
  end

  def move_to(user)
    posts.update_all(user_id: user.id)
  end

  def feed
    Post.where("user_id = ?", id)
  end

  private

    def create_remember_token
      self.remember_token = SecureRandom.urlsafe_base64
    end

end
