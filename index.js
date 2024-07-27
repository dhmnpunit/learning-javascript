/*  STRING SLICING 
    creating a portion of another string 

    string.slice(start, end)


*/

const fullName = "Punit Dhiman"

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);



const email = "punit1@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);
