class CreateAvatars < ActiveRecord::Migration[5.1]
  def change
    create_table :avatars do |t|
      t.references :user, foreign_key: true
      t.integer :xPos
      t.integer :yPos
      t.string :name

      t.timestamps
    end
  end
end
