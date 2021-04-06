const citiesAdapter = new CitiesAdapter
const restaurantsAdapter = new RestaurantsAdapter
const restaurantForm = document.getElementById("restaurant-form")

window.addEventListener("DOMContentLoaded", citiesAdapter.appendCities())

restaurantForm.addEventListener(`submit`, event => restaurantsAdapter.saveRestaurant(event))