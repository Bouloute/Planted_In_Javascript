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
        plantDiv.innerHTML = Plant.editView(plant)
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