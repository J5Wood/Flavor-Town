class RestaurantsController < ApplicationController
    def index
        if !!params[:city_id]
            restaurants = Restaurant.where(city_id: params[:city_id])
        else
            restaurants = Restaurant.all
        end
        render json: RestaurantSerializer.new(restaurants)
    end

    def show
        restaurant = Restaurant.find_by(id: params[:id])
        render json: restaurant
    end
end
