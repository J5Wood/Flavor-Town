class CitySerializer
  include JSONAPI::Serializer
  attributes :name, :id
  has_many :restaurants

  attribute :image_url do |object|
    "#{object.get_image_url}"
  end
end