class RestaurantsController < ApplicationController
    def index
        if !!params[:city_id]
            city = City.find_by(id: params[:city_id])
            restaurants = city.restaurants
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

    def update
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant.update(restaurant_params)
            render json: RestaurantSerializer.new(restaurant)
        else
            render json: {error: "ERROR"}
        end
    end

    def destroy
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant.destroy
            render json: {message: "Succesfully deleted #{restaurant.name}"}
        else
            render json: {error: "ERROR"}
        end
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(:name, :style, :neighborhood, :notes, :city_id, :top_dishes => [])
    end
end
