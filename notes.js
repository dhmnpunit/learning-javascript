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









/*  RANDOM NUMBER GENERATOR 

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;

let randomNum;

myButton.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}


console.log(randomNum);

*/










/*  IF STATEMENTS 
    if a condition is true, execute some code
    if not, do something else 


let age = 19;

if(age >= 18) {
    console.log("You are old enough to enter this site");
} else {
    console.log("You are not old enough to enter this site");
}





let time = 14;

if(time < 12) {
    console.log("Good Morning");
} else {
    console.log("Good afternoon")
}





let isStudent = true;

if(isStudent) {
    console.log("You are a student");
} else {
    console.log("You are not a Student");
}




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

*/










/*  CHECKED PROPERTY
    - property that determines the checked state of an HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const PayPalBtn = document.getElementById("PayPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function() {
    if(myCheckbox.checked) {
        subResult.textContent = `You are subscribed`;
    } else {
        subResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    } else if(masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    } else if(PayPalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal`;
    } else {
        paymentResult.textContent = `You must select a payment type`;
    }
}

*/










/*  TERNARY OPERATOR 
  - a shortcut to if{} and else{} statements
    helps to assign a variable based on a condition
    condition? codeIfTrue : codeIfFalse;

    let age = 12;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);



let time = 9;
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
console.log(greeting);



let isStudent = true;
let message = isStudent ? "You're a student" : "You're not a student";
console.log(message);



let purchaseAmount = 1000;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - (purchaseAmount * (discount/100))}`);

*/










