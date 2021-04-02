const citiesAdapter = new CitiesAdapter
const restaurantsAdapter = new RestaurantsAdapter
const cityList = document.getElementById("city-select")

window.addEventListener("DOMContentLoaded", citiesAdapter.listCities())

cityList.addEventListener("change", event => restaurantsAdapter.listRestaurants(event))
