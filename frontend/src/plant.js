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
                    <h2>Care Difficulty: ${this.water}</h2>
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
}