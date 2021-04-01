class CitiesAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/cities";
        this.list = document.getElementById("city-select")
    }
    
    getCities() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    listCities() {
        // const citySelect = document.getElementById("city-select")
        this.getCities().then(data => {
            data.data.forEach( city => {
                const newOption = document.createElement("option")
                newOption.value = city.attributes.name.toLowerCase()
                newOption.innerHTML = city.attributes.name
                this.list.appendChild(newOption)
            } )
        })
    }
}