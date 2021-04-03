const citiesAdapter = new CitiesAdapter
const restaurantsAdapter = new RestaurantsAdapter
const cityList = document.getElementById("city-select")
const restaurantForm = document.getElementById("restaurant-form")


window.addEventListener("DOMContentLoaded", citiesAdapter.listCities())

cityList.addEventListener("change", event => restaurantsAdapter.listRestaurants(event))
restaurantForm.addEventListener(`submit`, event => restaurantsAdapter.saveRestaurant(event, cityList))
