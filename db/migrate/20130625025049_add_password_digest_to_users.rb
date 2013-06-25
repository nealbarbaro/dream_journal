class AddPasswordDigestToUsers < ActiveRecord::Migration
  def change
    add_column :users, :password_digest, :string
    # a digest is a crypto term, this is where encrypted pass is stored
  end
end
