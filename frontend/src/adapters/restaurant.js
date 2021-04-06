class Restaurant {

    static all = []

    static findById(id) {
        return Restaurant.all.find(rest => rest.id == id)
    }

    static filterByStyle(style) {
        return Restaurant.all.filter(rest => rest.style == style)
    }

    constructor({name, style, neighborhood, notes, top_dishes, id}) {
        this.name = name
        this.style = style
        this.neighborhood = neighborhood 
        this.notes = notes
        this.top_dishes = top_dishes
        this.id = id
        this.element = document.createElement(`div`)
        this.list = document.getElementById(`restaurant-list`)
        
        Restaurant.all.push(this)
    }

    attachToDom() {
        this.buildListing()
        this.list.append(this.element)
    }

    updateDom({name, style, neighborhood, notes, top_dishes}) {
        this.name = name,
        this.style = style,
        this.neighborhood = neighborhood,
        this.notes = notes,
        this.top_dishes = top_dishes
        this.buildListing()
    }

    buildListing() {
        this.element.innerHTML = `
        <h2 class="listing-header"><strong>${this.name}</strong></h2><br>
        Style:
        <span>${this.style}</span><br><br>
        Neighborhood:
        <span>${this.neighborhood}</span><br><br>
        Notes:
        <span>${this.notes}</span><br><br>
        Top Dishes:
        <span>${this.top_dishes.join(", ")}</span><br><br>
        `
        const editButton = document.createElement("button")
        editButton.innerText = "Edit"
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        editButton.addEventListener("click", () => this.editForm())
        deleteButton.addEventListener("click", () => restaurantsAdapter.deleteRestaurant(this))
        this.element.append(editButton)
        this.element.append(deleteButton)
        this.element.classList.add("restaurant-listing")
        this.element.id = `restaurant-${this.id}`
    }

    editForm() {
        const listing = document.getElementById(`restaurant-${this.id}`)
        listing.innerHTML = `
        Name:
        <input type="text" id="update-name-${this.id}" value="${this.name}"><br><br>
        Style:
        <input type="text" id="update-style-${this.id}" value="${this.style}"><br><br>
        Neighborhood:
        <input type="text" id="update-neighborhood-${this.id}" value="${this.neighborhood}"><br><br>
        Notes:
        <input type="text" id="update-notes-${this.id}" value="${this.notes}"><br><br>
        Top Dishes:
        <input type="text" id="update-top-dishes-${this.id}" value="${this.top_dishes.join(", ")}"><br><br>
        `
        const submitButton = document.createElement("button")
        submitButton.innerText = "Submit"
        submitButton.id = `${this.id}`
        submitButton.addEventListener("click", event => restaurantsAdapter.sendPatchRequest(event))
        this.element.append(submitButton)
    }
}