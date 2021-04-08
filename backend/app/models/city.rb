class City < ApplicationRecord
    has_many :restaurants
    validates :name, presence: true
    validates :name, uniqueness: true
end
