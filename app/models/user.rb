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
#

class User < ActiveRecord::Base
  attr_accessible :email, :name, :password, :password_confirmation
  #by default all model attributes are accessible, just add pw and pwc symbols to create
  #columns in memory.

  has_secure_password #adds pw and pwc attributes, requires presence of password
    #requires they mach, and adds authenticate method, requires password_digest
    #column be in model

  before_save { |user| user.email = email.downcase } #a callback to force downcase

  validates :name,  presence: true, length: { maximum: 40 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i   # v_e_g is a constant
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  # rails infers uniqueness should be true, now protected except from accidental
  # "double submit button", need to enforce uniqueness at database level
  # create a database index on the email column, and require index be unique
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true
end

  # in console do bundle exec annotate
