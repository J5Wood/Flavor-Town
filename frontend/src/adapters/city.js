class City {

    static all = []

    static findById(id) {
        return City.all.find(city => city.id === id)
    }

    constructor({name, id}) {
        this.name = name;
        this.id = id;
        this.createAndAppend();

        City.all.push(this)
    }

    createAndAppend() {
        const list = document.getElementById("city-select")
        const newOption = document.createElement("option")
        newOption.value = this.id
        newOption.innerText = this.name
        list.appendChild(newOption)
    }
}