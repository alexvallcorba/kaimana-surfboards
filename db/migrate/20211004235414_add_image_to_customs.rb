class AddImageToCustoms < ActiveRecord::Migration[6.1]
  def change
    add_column :customs, :image_url, :string
  end
end

