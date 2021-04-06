const citiesAdapter = new CitiesAdapter
const restaurantsAdapter = new RestaurantsAdapter
const cityList = document.getElementById("city-select")
const restaurantForm = document.getElementById("restaurant-form")

window.addEventListener("DOMContentLoaded", citiesAdapter.appendCities())

cityList.addEventListener("change", event => restaurantsAdapter.handleRestSelection(event))
restaurantForm.addEventListener(`submit`, event => restaurantsAdapter.saveRestaurant(event))