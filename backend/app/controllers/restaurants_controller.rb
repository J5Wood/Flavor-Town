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

    def create
        restaurant = Restaurant.new(restaurant_params)
       
        if restaurant.save
            render json: RestaurantSerializer.new(restaurant)
        else
            render json: {error: "ERROR"}
        end
    end


    private

    def restaurant_params
        params.require(:restaurant).permit(:name, :style, :neighborhood, :notes, :top_dishes, :city_id)
    end
end
