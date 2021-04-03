class RestaurantsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
        this.list = document.getElementById("restaurant-list")
        this.restaurantForm = document.getElementById("restaurant-form")
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
            newDiv.addEventListener(`click`, event => this.handleRestaurantEvent(event))
            this.buttons.append(newDiv)
        })
    }

    handleRestaurantEvent(event) {
        if (event.target.innerText == "Add New Restaurant") {
            this.restaurantForm.hidden = false
        } 
        console.log(event.target.innerText)
    }


    saveRestaurant(event, cityList) {
        event.preventDefault()
        console.log(event)

        
        const name = event.target.name.value
        const style = event.target.style.value
        const neighborhood = event.target.neighborhood.value
        const notes = event.target.notes.value
        const top_dishes = event.target.top_dishes.value
        const city_id = cityList.value

        const newRest = {name, style, neighborhood, notes, top_dishes, city_id}

        let configObj = {
            method: `POST`,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newRest)
        }
        fetch(this.baseUrl + '/restaurants', configObj)
        .then(resp => resp.json())
        .then(response => console.log(response))
    }
}