class RestaurantSerializer
  include JSONAPI::Serializer
  attributes :name, :style, :neighborhood, :notes, :top_dishes, :id
  belongs_to :city
end