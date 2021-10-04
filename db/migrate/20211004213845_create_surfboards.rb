class CreateSurfboards < ActiveRecord::Migration[6.1]
  def change
    create_table :surfboards do |t|
      t.string :name
      t.string :description
      t.integer :dimensions
      t.integer :price

      t.timestamps
    end
  end
end
