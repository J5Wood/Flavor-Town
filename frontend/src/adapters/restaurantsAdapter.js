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
            data.data.forEach(obj => {
                let restaurant = new Restaurant(obj.attributes)
                // console.log(restaurant)
                // console.log(this)
                restaurant.attachToDom()
                // const restInfo = document.createElement("div")
                
                // restInfo.innerHTML = `
                
                // `
                // this.list.append()
                // restInfo.innerHTML = restaurant
                // this.list.appendChild(restInfo)
            })
        })
    }
}