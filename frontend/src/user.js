class User{
    constructor(id, username, email, password, zone){
        this.id = id
        this.username = username
        this.email = email
        this.password = password
        this.zone = zone
    }
    
    renderUser(){
        let usersDiv = document.getElementById("users");

        usersDiv.innerHTML += 
        `
        <button data-id=${this.id} data-username=${this.username} data-email=${this.email} data-password=${this.password} data-zone=${this.zone}>${this.username}</button>
        `
    }
}