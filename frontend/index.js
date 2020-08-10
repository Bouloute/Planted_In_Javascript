const BASE_URL = "http://127.0.0.1:3000"

document.addEventListener("DOMContentLoaded", () =>{
    readUsers();
    readPlants();
});


//______________PLANTS______________
//cRud
function readPlants(){
    fetch(`${BASE_URL}/plants`)
    .then(resp => resp.json())
    .then(plants => {
        for (let plant of plants){
            const dbPlant = new Plant(plant.id, plant.name, plant.imgsrc, plant.bloom, plant.zone, plant.water, plant.sunlight, plant.user_id)
            dbPlant.renderPlant();
        }
    })
}

//crUd
function editPlantView(){
    event.preventDefault();
    let plantId = parseInt(event.target.id)

    let plantDiv = document.getElementById(`plant-${plantId}`)
    
    // Gets plant to modify
    fetch(`${BASE_URL}/plants/${plantId}`)
    .then(resp => resp.json())
    .then(plant => {
        plantDiv.innerHTML = Plant.editView(plant)//TODO plant.editView()
        document.getElementById("editPlant").addEventListener("submit", editPlant)
    })
}

//cruD
 //TODO plant.js??
function deletePlant(){
    event.preventDefault();
    let plantId = parseInt(event.target.id)

    fetch(`${BASE_URL}/plants/${plantId}`, {
        method: 'DELETE'
    })
    .then(resp => {
        resp.json()})
    .then(document.getElementById(`plant-${plantId}`).remove());
}


function editPlant(){
    event.preventDefault()
    const plantId = parseInt(event.target.dataset.id)

    const plant = {
        name: event.target.name.value,
        water: event.target.water.value,
        sunlight: event.target.sun.value,
        imgsrc: event.target.picture.value
    }
    
    fetch(`${BASE_URL}/plants/${plantId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(plant)
    })
    .then(resp => resp.json())
    .then(newPlant => {
        const dbPlant = new Plant(newPlant.id, newPlant.name, newPlant.imgsrc, newPlant.bloom, newPlant.zone, newPlant.water, newPlant.sunlight, newPlant.user_id)
        dbPlant.renderReadView();
    });
}

/*CREATE WIP*/
function showHideAddPlant(){
    let plantDiv = document.getElementById("new-plant");

    //TODO: if this card is already there, hide it 
    plantDiv.innerHTML += `
    
    <div class="blog-card">
        <div class="meta">
            <div class="photo" style="background-image: url()"></div>
        </div>
        <div class="description">
            <form id="newPlant">
                <h1><input class="form-control form-control-sm" type="text" id="name"></h1>
                <h2>Watering: <input class="form-control-range form-control-sm" type="range" min="0" max="10" id="water"></h2>
                <h2>Sunlight: <input class="form-control-range form-control-sm" type="range" min="0" max="10" id="sun"></h2>
                <p>Picture URL: <input class="form-control form-control-sm" type="text" id="picture"></p>
                <p class="read-more">
                    <input class="btn btn-success btn-sm" type="submit" value="Submit">
                </p>
                
            </form>
        </div>
    </div>
    `
    
    document.getElementById("newPlant").addEventListener("submit", addPlant)
}

function addPlant(){
    event.preventDefault();
    const user_id = User.getCheckedUser();
    
    const plant = {
        name: event.target.name.value,
        water: event.target.water.value,
        sunlight: event.target.sun.value,
        imgsrc: event.target.picture.value,
        user_id: user_id
    }

    fetch(`${BASE_URL}/plants`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(plant)
    })
    .then(resp => resp.json())
    .then(newPlant => {
        const dbPlant = new Plant(newPlant.id, newPlant.name, newPlant.imgsrc, newPlant.bloom, newPlant.zone, newPlant.water, newPlant.sunlight, newPlant.user_id)
        dbPlant.renderPlant();
    });
}






//______________USERS______________
function readUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (let user of users){
            const dbUser = new User(user.id, user.username, user.email, user.password, user.zone)
            dbUser.renderUser();
        }
    })
}