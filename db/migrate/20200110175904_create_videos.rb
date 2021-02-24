class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description
      t.integer :author_id, null: false
      t.integer :view_counts, null: false, default: 0
      t.timestamps
    end
    add_index :videos, :author_id
    add_index :videos, :title
  end
end
