class RestaurantsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
        this.list = document.getElementById("restaurant-list")
    }

    getRestaurants(city) {
        return fetch(this.baseUrl + "/cities/" + city + "/restaurants").then(resp => resp.json())
    }

    listRestaurants(event) {
        this.list.innerHTML = ""
        this.getRestaurants(event.target.value)
        .then(data => {
            data.data.forEach(restaurant => {
                const restInfo = document.createElement("div")
                restInfo.innerHTML = restaurant.attributes.name + restaurant.attributes.style + restaurant.attributes.neighborhood + restaurant.attributes.notes + restaurant.attributes.top_dishes
                this.list.appendChild(restInfo)
            })
        })
    }
}