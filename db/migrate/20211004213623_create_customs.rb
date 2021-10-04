class CreateCustoms < ActiveRecord::Migration[6.1]
  def change
    create_table :customs do |t|
      t.string :name
      t.integer :rocker
      t.integer :height
      t.integer :volume
      t.integer :tail_width

      t.timestamps
    end
  end
end
