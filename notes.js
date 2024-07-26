/*  BASICS

console.log(`Hello`);
console.log(`i like pizza`);

window.alert(`this is an alert`);
window.alert(`i like pizza`);

this is a comment

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza!`;

*/










/*  VARIABLES 

variable = a container that stores a value.
           behaves as if it were the value it contains.

1. declaration      let x;
2. assignment       x = 100;


let x;
x = 123;
console.log(x);

let age = 25;
console.log(age);

let price = 10.99;
console.log(price);

let gpa = 2.1;
console.log(gpa);

let firstName = "Punit";

let favouriteFood = "pizza";

let email = "bro@gmail.com"


console.log(`you are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);
console.log(typeof age);
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);


let online = true;
let forSale = false;
let student = true;

console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${student}`);


let fullName = "Punit Dhiman";
let age = 17;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;


*/










/* ARITHEMATIC OPERATORS

arithematic operatoes = operands (values, variables, etc.)
                        operators (+ - * /)
                        ex. 11 = x + 5;



    let students = 30;

// students = students + 2;
// students = students - 2;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 3;


// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;


// students++;
// students--;


{   
    OPERATOR PRECEDENCE
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo 
    4. addition % subtrsaction 
}



let result = 1 + 2 * 3 + 4 ** 2;


console.log(result);


*/









/*  HOW TO ACCEPT USER INPUT
    
    1. EASY WAY = window prompt
    2. PROFESSIOL WAY = HTML textbox


1.  EASY WAY 

    let username; 
    username = window.prompt(`What's your username?`);
    console.log(username);


2.  PROFESSIONAL WAY

    let username;
    document.getElementById("mySubmit").onclick = function(){
        username = document.getElementById("myText").value;
        document.getElementById("WelcomeText").textContent = `Hello ${username}`
    }

*/









/*  TYPE CONVERSION

type conversion = change the datatype pf a value to another
                  (stings, numbers, booleans)



                let age = window.prompt("How old are you?");
                age = Number(age);
                age += 1;
                console.log(age, typeof age);


                let x = "0";
                let y = "0";
                let z = "0";

                x = Number(x);
                y = String(y);
                z = Boolean(z);

                console.log(x, typeof x);
                console.log(y, typeof y);
                console.log(z, typeof z);


*/





git 



/*  CONSTANTS

const = a variable that can't be changed 


const PI = 3.14195;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("myH3").textContent = `The circumference of the circle is ${circumference} cm`;
}


*/









/*  COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

*/









/*  Math = built-in object that provides a  collection of properties and methods

let x = 3;
let y = 2;
let z;
let a = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(y);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(a, x, y);
// let min = Math.min(a, x, y);



console.log(min);


*/