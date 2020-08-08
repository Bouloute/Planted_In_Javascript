# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: "admin", email: "admin@gmail.com", zone: 2);
user2 = User.create(username: "Annaick", email: "annaick1995@gmail.com", zone: 4);
plant1 = Plant.create(name: "Marble Queen", imgsrc: "https://www.ootsiesblossomsboutique.com/uploads/4/7/9/8/47986493/s222589915213973121_p394_i1_w567.png", zone: 5, water: 2, sunlight: 3, user: user1)
plant2 = Plant.create(name: "Spider Plant", imgsrc: "https://images-na.ssl-images-amazon.com/images/I/61PPYUoc2aL._AC_SL1000_.jpg", zone: 10, water: 3, sunlight: 2, user: user1)
plant3 = Plant.create(name: "Nanouk", imgsrc: "https://edencollection.nl/wordpress/wp-content/uploads/2019/05/Tradescantia-N-742x741.jpg", zone: 4, water: 4, sunlight: 8, user: user2)
