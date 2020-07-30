class Plant{
    constructor(id, name, imgsrc, bloom, zone, water, sunlight){
        this.id = id
        this.name = name
        this.imgsrc = imgsrc
        this.bloom = bloom
        this.zone = zone
        this.water = water
        this.sunlight = sunlight
    }

    renderPlants(){
        let plantsDiv = document.getElementById("plants");
        //TODO ul li?
        plantsDiv.innerHTML += 
        `
        <div class="blog-card">
            <div class="meta">
                <div class="photo" style="background-image: url(${this.imgsrc})"></div>
            </div>
            <div class="description">
                <h1>${this.name}</h1>
                <h2>Care: ${this.water}</h2>
                <p></p>
            </div>
        </div>
        `
    }

    
}