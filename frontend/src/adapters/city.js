class City {

    static all = []

    static findById(id) {
        return City.all.find(city => city.id === id)
    }

    constructor({name, id}) {
        this.name = name;
        this.id = id;

        City.all.push(this)
    }
}