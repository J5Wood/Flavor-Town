class CitiesAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/cities";
        this.list = document.getElementById("city-select")
        this.newCityDiv = document.getElementById("new-city")
        this.newCityButton = document.getElementById("create-city")
    }
    
    getCities() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    listCities() {
        this.list.innerHTML = `
        <option value="none"></option>
        `
        this.getCities().then(response => {
            response.data.forEach( city => {
                const newOption = document.createElement("option")
                newOption.value = city.id
                newOption.innerText = city.attributes.name
                this.list.appendChild(newOption)       
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
        .then(() => {
            this.newCityButton.hidden = false
            const cityForm = document.getElementById("city-form")
            cityForm.remove()
            this.listCities()
        
        })


    }
}