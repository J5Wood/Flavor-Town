class RestaurantSerializer
  include JSONAPI::Serializer
  attributes :name, :style, :neighborhood, :notes, :top_dishes, :id
  belongs_to :city

  attribute :image_url do |object|
    "#{object.city.get_image_url}"
  end
end