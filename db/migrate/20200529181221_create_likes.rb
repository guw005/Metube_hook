class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.references :likable, polymorphic: true
      t.integer :likable_id, null: false
      t.string :likable_type, null: false
      t.boolean :is_like, null: false

      t.timestamps
      t.index :user_id
    end

    add_index :likes, [:user_id, :likable_id, :likable_type], unique: true
  end
end
