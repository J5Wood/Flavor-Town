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
        // const addDish = document.getElementById("add-dish")
        // addDish.addEventListener("click",event => this.addDishField(event))
    }

    // addDishField(event) {
    //     event.preventDefault
    //     const topDishField = document.getElementById("top-dishes")
    //     const newField = document.createElement("input")
    //     newField.type = "text"
    //     newField.classList.add("top-dishes")
    //     topDishField.append(newField)
    // }


    saveRestaurant(event, cityList) {
        event.preventDefault()

        const name = event.target.name.value
        const style = event.target.style.value
        const neighborhood = event.target.neighborhood.value
        const notes = event.target.notes.value
        const top_dishes = [event.target.top_dishes.value]
        const city_id = cityList.value

        const newRest = {name, style, neighborhood, notes, city_id, top_dishes}

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
        .then(response => this.appendToDom(response))
    }

    appendToDom(resp) {
        const newListing = new Restaurant(resp.data.attributes)
        newListing.attachToDom()
        this.restaurantForm.hidden = true
    }

    sendPatchRequest(event) {
        console.log(event)
        const name = document.getElementById(`update-name-${event.target.id}`).value
        const style = document.getElementById(`update-style-${event.target.id}`).value
        const neighborhood = document.getElementById(`update-neighborhood-${event.target.id}`).value
        const notes = document.getElementById(`update-notes-${event.target.id}`).value
        const topDishes = [document.getElementById(`update-top-dishes-${event.target.id}`).value]
        
        const updatedRestaurant = {
            name: name,
            style: style,
            neighborhood: neighborhood,
            notes: notes,
            top_dishes: topDishes
        }

        let configObj = {
            method: `PATCH`,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(updatedRestaurant)
        }

        fetch(this.baseUrl + "/restaurants/" + event.target.id, configObj)
        .then(resp => resp.json())
        .then(response => {
            const restaurant = document.getElementById(`restaurant-${event.target.id}`)
            // restaurant.innerHtml=""
            // restaurant.renderListing(response)
            console.log(restaurant)
        })


    }
}