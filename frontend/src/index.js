const restaurantList = document.getElementById("restaurant-list")
const citiesAdapter = new CitiesAdapter

window.addEventListener("DOMContentLoaded", citiesAdapter.listCities())

