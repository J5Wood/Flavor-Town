class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :style, :neighborhood, :notes, :top_dishes, :id
  belongs_to :city
end
