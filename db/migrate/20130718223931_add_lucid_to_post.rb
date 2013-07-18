class AddLucidToPost < ActiveRecord::Migration
  def change
    add_column :posts, :lucid, :boolean, default: false
  end
end
