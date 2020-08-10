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

        if (this.id == 1){ //BAD PRACTICE
            usersDiv.innerHTML += 
            `
            <input type="radio" id=${this.id} name="user" CHECKED>${this.username}</input>
            `
        }else{
            usersDiv.innerHTML += 
            `
            <input type="radio" id=${this.id} name="user">${this.username}</input>
            `
        }
    }

    static getCheckedUser(){
        for(let user of document.getElementsByName("user") ){
            if(user.checked) {
                return parseInt(user.id)
            }
        }
    }
}