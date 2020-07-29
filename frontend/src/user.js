class User{
    constructor(id, username){
        this.id = id
        this.username = username
    }

    renderUsers(){
        let usersDiv = document.getElementById("users");
        //TODO ul li?
        const newP = document.createElement('p');
        newP.innerText = this.username;
        
        usersDiv.appendChild(newP)
    }
}