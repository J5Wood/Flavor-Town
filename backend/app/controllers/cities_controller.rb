class CitiesController < ApplicationController
    def index
        cities = City.all
        render json: CitySerializer.new(cities)
    end
end
