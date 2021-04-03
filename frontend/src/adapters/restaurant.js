class Restaurant {
    constructor({name, style, neighborhood, notes, top_dishes}) {
        this.name = name
        this.style = style
        this.neighborhood = neighborhood 
        this.notes = notes
        this.top_dishes = top_dishes
        this.element = document.createElement(`div`)
        this.list = document.getElementById(`restaurant-list`)
    }


    attachToDom() {
        this.buildListing()
        this.list.append(this.element)
    }

    buildListing() {
        this.element.innerHTML = `
        <strong>${this.name}</strong><br><br>
        Style:
        <span>${this.style}</span><br><br>
        Neighborhood:
        <span>${this.neighborhood}</span><br><br>
        Notes:
        <span>${this.notes}</span><br><br>
        Top Dishes:
        <span>${this.top_dishes.join(", ")}</span><br><br>
        `
        this.element.classList.add("restaurant-listing")
        return this.element
    }

}