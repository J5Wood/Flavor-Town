class CitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id
  has_many :restaurants
end
