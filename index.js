/*  IF STATEMENTS 
    if a condition is true, execute some code
    if not, do something else 

*/

// let age = 19;

// if(age >= 18) {
//     console.log("You are old enough to enter this site");
// } else {
//     console.log("You are not old enough to enter this site");
// }





// let time = 14;

// if(time < 12) {
//     console.log("Good Morning");
// } else {
//     console.log("Good afternoon")
// }





// let isStudent = true;

// if(isStudent) {
//     console.log("You are a student");
// } else {
//     console.log("You are not a Student");
// }




const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age >= 100) {
        resultElement.textContent = `You are TOO OLD to enter this site`;
    } else if(age == 0) {
        resultElement.textContent = `You can't enter. You were just born`;
    } else if(age >= 18) {
        resultElement.textContent = `You are old enough to enter this site.`;
    } else if(age < 0) {
        resultElement.textContent = `Your age can't be below 0`;
    } else {
        resultElement.textContent = `You must be 18+ to enter this site`;
    }

}

