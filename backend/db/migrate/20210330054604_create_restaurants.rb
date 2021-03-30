class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :style
      t.string :neighborhood
      t.string :notes
      t.string :top_dishes

      t.timestamps
    end
  end
end
