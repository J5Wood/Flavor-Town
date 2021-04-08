class Restaurant < ApplicationRecord
    belongs_to :city
    serialize :top_dishes
    validates :name, :style, :neighborhood, :notes, presence: true
end
