class ChangeColumnDescriptionInVideos < ActiveRecord::Migration[5.2]
  def change
    change_column :videos, :description, :text, default: ""
  end
end
