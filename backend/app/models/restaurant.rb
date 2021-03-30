class Restaurant < ApplicationRecord
    belongs_to :city
    serialize :top_dishes
end
