const BASE_URL = "http://127.0.0.1:3000"

document.addEventListener("DOMContentLoaded", () =>{
    
    readPlants();

});

//cRud
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

//crUd
function editPlantView(){
    let plantId = parseInt(event.target.id)

    let plantDiv = document.getElementById(`plant-${plantId}`)
    
    // Gets plant to modify
    fetch(`${BASE_URL}/plants/${plantId}`)
    .then(resp => resp.json())
    .then(plant => {
        plantDiv.innerHTML = 
        `
        <div class="meta">
        </div>
        <div class="description">
            <form id="editPlant" data-id="${plant.id}">
                <h1><input class="form-control form-control-sm" type="text" id="name" value="${plant.name}"></h1>
                <h2>Watering: <input class="form-control-range form-control-sm" type="range" min="0" max="10" id="water" value="${plant.water}"></h2>
                <h2>Sunlight: <input class="form-control-range form-control-sm" type="range" min="0" max="10" id="sun" value="${plant.sun}"></h2>
                <p>Picture URL: <input class="form-control form-control-sm" type="text" id="picture" placeholder="${plant.imgsrc}"></p>
                <p class="read-more">
                    <input class="btn btn-success btn-sm" type="submit" value="Submit">
                </p>
                
            </form>
        </div>
        `
        document.getElementById("editPlant").addEventListener("submit", editPlant)
        
    })
}

//cruD
 //TODO plant.js??
function deletePlant(){
    let plantId = parseInt(event.target.id)

    fetch(`${BASE_URL}/plants/${plantId}`, {
        method: 'DELETE'
    })

    this.location.reload()
}


function editPlant(){
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
    .then(this.location.reload());
}