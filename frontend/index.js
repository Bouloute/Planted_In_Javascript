const BASE_URL = "http://127.0.0.1:3000"

document.addEventListener("DOMContentLoaded", () =>{
    //readUsers();
    readPlants();
});

//TODO: Change html
function readUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (let user of users){
            const fUser = new User(user.id, user.username)
            fUser.renderUsers();
        }
    })
}






function readPlants(){
    fetch(`${BASE_URL}/plants`)
    .then(resp => resp.json())
    .then(plants => {
        for (let plant of plants){
            const dbPlant = new Plant(plant.id, plant.name, plant.imgsrc, plant.bloom, plant.zone, plant.water, plant.sunlight, plant.user_id)
            dbPlant.renderPlants();
        }
    })
}
