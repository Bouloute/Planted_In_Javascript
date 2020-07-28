const BASE_URL = "http://127.0.0.1:3000"

document.addEventListener("DOMContentLoaded", () =>{
    readUsers();
});

//TODO: Change html
function readUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (let user of users){
            //TODO: make into a function
            const fUser = new User(user.id, user.username)
            let usersDiv = document.getElementById("users");
            
            const newP = document.createElement('p');
            newP.innerText = fUser.username;
            usersDiv.appendChild(newP)

        }
    })
}