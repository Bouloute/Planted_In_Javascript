class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :imgsrc
      t.string :bloom
      t.integer :zone
      t.integer :water
      t.integer :sunlight

      t.timestamps
    end
  end
end
