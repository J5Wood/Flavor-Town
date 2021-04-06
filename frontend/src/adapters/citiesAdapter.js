class CitiesAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/cities";
        this.list = document.getElementById("city-select")
        this.newCityDiv = document.getElementById("new-city")
        this.newCityButton = document.getElementById("create-city")
        this.addEventListeners()
    }

    addEventListeners() {
        this.list.addEventListener("change", event => restaurantsAdapter.handleRestSelection(event))
        this.newCityButton.addEventListener("click", () => this.appendCityForm())
    }
    
    getCities() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    appendCities() {
        this.list.innerHTML = `
        <option value="none"></option>
        `
        City.all = []
        this.getCities().then(response => {
            response.data.forEach( city => {
                new City(city.attributes)      
            })
        })
    }

    appendCityForm() {
        const cityForm = document.createElement("form")
        cityForm.id = "city-form"
        cityForm.innerHTML = `
        <label for="city-input">New City: </label>
        <input type="text" id="city-input">
        <input type="submit" value="Add">
        `
        cityForm.addEventListener("submit", event => this.createCity(event))
        
        this.newCityButton.hidden = true
        this.newCityDiv.append(cityForm)
    }

    createCity(event) {
        event.preventDefault()
        const name = document.getElementById("city-input").value
        const newCity = {name}

        let configObj = {
            method: `POST`,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newCity)
        }

        fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(response => {
            this.newCityButton.hidden = false
            const cityForm = document.getElementById("city-form")
            cityForm.remove()
            new City(response.data.attributes)
            restaurantsAdapter.fetchRestaurants(response.data.attributes.id)
        })
    }
}