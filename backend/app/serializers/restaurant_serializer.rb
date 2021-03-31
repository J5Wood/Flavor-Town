class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :style, :neighborhood, :notes, :top_dishes
  belongs_to :city
end
