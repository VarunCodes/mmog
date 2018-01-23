class AddColourToAvatars < ActiveRecord::Migration[5.1]
  def change
    add_column :avatars, :colour, :string
  end
end
