class Plant{
    constructor(id, name, imgsrc, bloom, zone, water, sunlight, user_id){
        this.id = id
        this.name = name
        this.imgsrc = imgsrc
        this.bloom = bloom
        this.zone = zone
        this.water = water
        this.sunlight = sunlight
        this.user_id = user_id
        this.care = (water + sunlight) / 2
    }

    //cRud
    renderPlants(){
        let plantsDiv = document.getElementById("plants");

        fetch(`${BASE_URL}/users/${this.user_id}`)
        .then(resp => resp.json())
        .then(user => {
            plantsDiv.innerHTML += 
            `
            <div class="blog-card" id="plant-${this.id}">
                <div class="meta">
                    <div class="photo" style="background-image: url(${this.imgsrc})"></div>
                </div>
                <div class="description">
                    <h1>${this.name}</h1>
                    <h2>Care Difficulty: ${this.care}</h2>
                    <p>Added by: ${user.username}</p>
                    <p class="read-more">
                    <button class="btn btn-warning btn-sm" id="${this.id}" onclick="editPlantView()">Edit</button>
                    <button class="btn btn-danger btn-sm" id="${this.id}" onclick="deletePlant()">Delete</button>
                    </p>
                </div>
            </div>
            `
            
        })
    }

    static editView(plant){
        
        return (`
        <div class="meta">
            <div class="photo" style="background-image: url(${plant.imgsrc})"></div>
        </div>
        <div class="description">
            <form id="editPlant" data-id="${plant.id}">
                <h1><input class="form-control form-control-sm" type="text" id="name" value="${plant.name}"></h1>
                <h2>Watering: <input class="form-control-range form-control-sm" type="range" min="0" max="10" id="water" value="${plant.water}"></h2>
                <h2>Sunlight: <input class="form-control-range form-control-sm" type="range" min="0" max="10" id="sun" value="${plant.sunlight}"></h2>
                <p>Picture URL: <input class="form-control form-control-sm" type="text" id="picture" value="${plant.imgsrc}"></p>
                <p class="read-more">
                    <input class="btn btn-success btn-sm" type="submit" value="Submit">
                </p>
                
            </form>
        </div>
        `)
    }
}