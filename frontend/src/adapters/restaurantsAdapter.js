class RestaurantsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    getRestaurants(city) {
        return fetch(this.baseUrl + "/cities/" + city + "/restaurants").then(resp => resp.json())
    }
}