class AddCityIdToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_reference :restaurants, :city, null: false, foreign_key: true
  end
end
