class CitiesController < ApplicationController
    def index
        cities = City.all
        render json: CitySerializer.new(cities)
    end

    def create
        if city = City.find_by(name: params[:name])
            render json: CitySerializer.new(city)
        else
            city = City.new(city_params)
            if city.save
                render json: CitySerializer.new(city)
            else
                render json: {error: "ERROR"}
            end
        end
    end

    private

    def city_params
        params.require(:city).permit(:name, :id)
    end
end
