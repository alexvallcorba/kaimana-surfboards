class AddColumnToSurfboard < ActiveRecord::Migration[6.1]
  def change
    add_column :surfboards, :image_url, :string
  end
end
