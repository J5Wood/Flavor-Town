# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

n = City.create(name: "New York")
n.restaurants.create(name: "Mario's", style: "Italian", neighborhood: "Little Italy", notes: "Neapolitan, family owned Italian.", top_dishes: ["Spedini ala Romana", "Mario’s epic seafood salad"])
n.restaurants.create(name: "Africa Kine", style: "Senegalese", neighborhood: "Harlem", notes: "Takeout Only.", top_dishes: ["Thiebu Djen", "Mafe", "Yassa"])
n.restaurants.create(name: "La Morada", style: "Mexican", neighborhood: "The Bronx", notes: "Oaxacan. Amazing Moles.", top_dishes: ["Mole Oaxaqueño", "Molcajete"])
n.restaurants.create(name: "Fieldtrip", style: "American", neighborhood: "Harlem", notes: "Takeout Only.", top_dishes: ["Texas Brown Rice", "Spicy Seafood Gumbo", "hibiscus rice milk soft serve"])

l = City.create(name: "Los Angeles")
l.restaurants.create(name: "Broad Street Oyster Company", style: "Seafood", neighborhood: "Malibu", notes: "Drive thru is an option!", top_dishes: ["Lobster Roll", "Lobster Bisque"])
l.restaurants.create(name: "Lum-Ka-Naad", style: "Thai", neighborhood: "Northridge", notes: "Northern and southern Thai options", top_dishes: ["Gang Jerd PAak Dong Khem", "Yum Ped Yang", "Pladuk Pad Ped"])
l.restaurants.create(name: "Pasjoli", style: "French", neighborhood: "Santa Monica", notes: "Parisian Bistro Dishes", top_dishes: ["Poussin Farci et Champagne", "Steak au Poivre"])
l.restaurants.create(name: "Mizlala", style: "Mediterranean", neighborhood: "Sherman Oaks", notes: "Casual, small plates.", top_dishes: ["Apricot Lamb Tagine", "Grilled Branzino"])

s = City.create(name: "Seattle")
s.restaurants.create(name: "Pestle Rock", style: "Thai", neighborhood: "Ballard", notes: "Isan Style Thai", top_dishes: ["Kao Soi", "Nam Tok"])
s.restaurants.create(name: "Barrio", style: "Mexican", neighborhood: "Capitol Hill", notes: "Good stop for drinks.", top_dishes: ["Beef Birria Quesadillas", "Tauitos", "Pozole"])
s.restaurants.create(name: "Itto's", style: "Spanish", neighborhood: "West Seattle", notes: "Greate tapas.", top_dishes: ["Tortilla Español", "Berbere Burger"])
s.restaurants.create(name: "Big Mario's", style: "Pizza", neighborhood: "Capitol Hill", notes: "Great late night slices.", top_dishes: ["Kao Soi", "Nam Tok"])

p = City.create(name: "Philadelphia")

