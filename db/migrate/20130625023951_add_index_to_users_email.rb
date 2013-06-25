class AddIndexToUsersEmail < ActiveRecord::Migration
  def change
    add_index :users, :email, unique: true
    # creates a database index on email column, enforces uniqueness on db level
  end
end
