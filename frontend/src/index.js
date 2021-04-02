const restaurantList = document.getElementById("restaurant-list")
const citiesAdapter = new CitiesAdapter
const restaurantsAdapter = new RestaurantsAdapter
const cityList = document.getElementById("city-select")

window.addEventListener("DOMContentLoaded", citiesAdapter.listCities())

cityList.addEventListener("change", event => {
    restaurantsAdapter.getRestaurants(event.target.value)
    .then(data => {
        console.log(data)
    })
})