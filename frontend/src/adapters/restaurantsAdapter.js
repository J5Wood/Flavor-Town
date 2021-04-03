class RestaurantsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
        this.list = document.getElementById("restaurant-list")
        this.buttons = document.getElementById("buttons")
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
                restaurant.attachToDom()
            })
        })
        this.buttonDisplay()
    }

    buttonDisplay() {
        this.buttons.innerHTML = ""
        const buttonsArray = ["Add New Restaurant", "Sort By", "Surprise Me"];
        buttonsArray.forEach(button => {
            const newDiv = document.createElement(`div`)
            newDiv.classList.add(`${button.toLowerCase().split(" ").join("-")}-button`)
            const newButton = document.createElement(`button`)
            newButton.innerText = button
            newDiv.append(newButton)
            this.buttons.append(newDiv)
        })
    }
}