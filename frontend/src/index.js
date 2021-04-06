const citiesAdapter = new CitiesAdapter
const restaurantsAdapter = new RestaurantsAdapter
const cityList = document.getElementById("city-select")
const restaurantForm = document.getElementById("restaurant-form")
const newCityButton = document.getElementById("create-city")

window.addEventListener("DOMContentLoaded", citiesAdapter.listCities())

cityList.addEventListener("change", event => restaurantsAdapter.listRestaurants(event))
restaurantForm.addEventListener(`submit`, event => restaurantsAdapter.saveRestaurant(event, cityList))
newCityButton.addEventListener("click", () => citiesAdapter.appendCityForm())