class City < ApplicationRecord
    include Rails.application.routes.url_helpers
    has_many :restaurants
    validates :name, presence: true
    validates :name, uniqueness: true
    has_one_attached :image

    def get_image_url
        if self.image.attached?
            url_for(self.image)
        end
    end
end
