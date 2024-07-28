/*  WHILE LOOP 
    repeat some code WHILE some condition is true



*/


let userName = "";

while(userName === "" || null) {
    userName = window.prompt(`Enter your name`);

}

console.log(`Hello ${userName}`);



let loggedIn = false;
let userName;
let password;

while(!loggedIn) {
    userName = window.prompt(`Enter your username`)
    password = window.prompt(`Enter your password`)

    if(userName === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("you are logged in!");
    } else {
        console.log("invalid credentials! Please try again!");
    }
}
