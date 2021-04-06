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
        if (event.target.value === "none") {
            return
        } else {
            this.list.innerHTML = ""
            Restaurant.all = []
            this.getRestaurants(event.target.value)
            .then(data => {
                data.data.forEach(obj => {
                    let restaurant = new Restaurant(obj.attributes)
                    restaurant.attachToDom()
                })
            })
        }
        this.buttonDisplay()
    }

    buttonDisplay() {
        this.buttons.innerHTML = ""
        const buttonsArray = ["Add New Restaurant", "Sort By", "Surprise Me"];
        buttonsArray.forEach(button => {
            const newDiv = document.createElement(`div`)
            newDiv.id = `${button.toLowerCase().split(" ").join("-")}-button`
            const newButton = document.createElement(`button`)
            newButton.innerText = button
            newDiv.append(newButton)
            newDiv.addEventListener(`click`, event => this.handleRestaurantEvent(event))
            this.buttons.append(newDiv)
        })
        this.appendSortForm()
    }

    appendSortForm() {
        const sortByButton = document.getElementById("sort-by-button")
        const sortForm = document.createElement("form")
        sortForm.id = "sort-form"
        sortForm.hidden = true
        const restSelect = document.createElement("select")
        restSelect.id = "sort-select"
        restSelect.addEventListener("change", event => this.sortRestaurants(event))
        sortForm.appendChild(restSelect)
        sortByButton.append(sortForm)
    }

    sortRestaurants(event) {
        if (event.target.value === "") {
            return
        } else if (event.target.value === "all"){
            Restaurant.all.forEach(rest => rest.attachToDom())
        } else {
            const sortedRestaurants = Restaurant.filterByStyle(event.target.value)
            this.list.innerHTML = ""
            sortedRestaurants.forEach(rest => rest.attachToDom())
        }
    }

    handleRestaurantEvent(event) {
        if (event.target.innerText === "Add New Restaurant") {
            console.log(event)
            if (this.restaurantForm.hidden === true) {
                this.restaurantForm.hidden = false
            } else {
                this.restaurantForm.hidden = true
            }
        } else if (event.target.innerText == "Sort By") {
            const sortForm = document.getElementById("sort-form")
            if (sortForm.hidden === true) {
                sortForm.hidden = false
                this.appendSortList(sortForm)
            } else {
                sortForm.hidden = true
            }

        }
    }

    appendSortList() {
        const sortList = document.getElementById("sort-select")
        sortList.innerHTML = `
        <option value=""></option>
        <option value="all">All</option>
        `
        Restaurant.all.forEach(rest => {
            const newOption = document.createElement("option")
            newOption.value = rest.style
            newOption.innerText = rest.style
            sortList.append(newOption)
        })
    }

    saveRestaurant(event, cityList) {
        event.preventDefault()

        const name = event.target.name.value
        const style = event.target.style.value
        const neighborhood = event.target.neighborhood.value
        const notes = event.target.notes.value
        const top_dishes = [event.target.top_dishes.value]
        const city_id = cityList.value

        event.target.name.value = ""
        event.target.style.value = ""
        event.target.neighborhood.value = ""
        event.target.notes.value = ""
        event.target.top_dishes.value = ""

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
            const restaurant = Restaurant.findById(response.data.attributes.id)
            restaurant.updateDom(response.data.attributes)          
        })
    }

    deleteRestaurant(restaurant) {
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        fetch(this.baseUrl + "/restaurants/" + restaurant.id, configObj)
        .then(resp => resp.json())
        .then( () => this.removeRestFromDom(restaurant.id))
    }

    removeRestFromDom(id) {
        document.getElementById(`restaurant-${id}`).remove()
    }
}