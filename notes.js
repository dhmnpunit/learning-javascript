/*  FIXME: BASICS

console.log(`Hello`);
console.log(`i like pizza`);

window.alert(`this is an alert`);
window.alert(`i like pizza`);

this is a comment

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza!`;

*/










/*  FIXME: VARIABLES 

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










/* FIXME: ARITHEMATIC OPERATORS

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









/*  FIXME: HOW TO ACCEPT USER INPUT
    
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









/*  FIXME: TYPE CONVERSION

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



/*  FIXME: CONSTANTS

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









/*  FIXME: COUNTER PROGRAM

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









/*  FIXME: Math = built-in object that provides a  collection of properties and methods

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









/*  FIXME: RANDOM NUMBER GENERATOR 

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










/*  FIXME: IF STATEMENTS 
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










/*  FIXME: CHECKED PROPERTY
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










/*  FIXME: TERNARY OPERATOR 
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










/*  FIXME: SWITCH
    can be efficinet replacement to many else if statements 

let day = 5;

without using switch 

if(day == 1) {
    console.log(`It is Monday`);
} else if(day == 2) {
    console.log(`It is Tuesday`);
} else if(day == 3) {
    console.log(`It is Wednesday`);
} else if(day == 4) {
    console.log(`It is Thursday`);
} else if(day == 5) {
    console.log(`It is Friday`);
} else if(day == 6) {
    console.log(`It is Saturday`);
} else if(day == 7) {
    console.log(`It is Sunday`);
} else {
    console.log(`${day} is not a day.`)
}



with using switch

switch (day) {
    case 1:
        console.log(`It is Monday`);
        break;
    case 2:
        console.log(`It is Tuesday`);
        break;
    case 3:
        console.log(`It is Wednesday`);
        break;
    case 4:
        console.log(`It is Thursday`);
        break;
    case 5:
        console.log(`It is Friday`);
        break;
    case 6:
        console.log(`It is Saturday`);
        break;
    case 7:
        console.log(`It is Sunday`);
        break;
    default:
        console.log(`${day} is not a day`)
        break;
}




let testScore = 34;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);


*/










/*  FIXME: STRING METHODS 
    allow you to manipulate and work with text (strings)

let userName = "PunitDhiman";
let newName = "punit     ";

// TODO: .charAt() 
console.log(userName.charAt(5));

// TODO: .indexOf() .lastIndexOf()
console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("i"));

// TODO: .length()
console.log(userName.length);

// TODO: .trim()
newName = newName.trim();
console.log(newName);

// TODO: .toUpperCase()
console.log(userName.toUpperCase());

// TODO: .toLowerCase()
console.log(userName.toLowerCase());

// TODO: .repeat()
console.log(userName.repeat(3));

// TODO: .startsWith()
console.log(userName.startsWith("P"));

// TODO: .endsWith()
console.log(userName.endsWith("n"));

// TODO: .includes()
console.log(userName.includes("D"));



let phoneNumber = "123-456-7890";

// TODO: .replaceAll()
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

// TODO: .padStart()
phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);

// TODO: .padEnd()
phoneNumber = phoneNumber.padEnd(20, "0");
console.log(phoneNumber);

*/









/*  FIXME: STRING SLICING 
    creating a portion of another string 

    string.slice(start, end)

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


*/










/*  FIXME: METHOD CHAINING 
    calling one method after another
    in one continuous line of code.

let userName = window.prompt("Enter your username:");


// TODO: ----- NO METHOD CHAINING ------

userName = userName.trim();

let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChar = userName.slice(1);
extraChar = extraChar.toLowerCase();

userName = letter + extraChar;
console.log(userName); 

// TODO: ----- METHOD CHAINING ------

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName)

*/










/*  FIXME: LOGICAL OPERATORS
    used to combine or manipulate boolean values
    (true or false)

    AND = &&
    OR = ||
    NOT = !

const temp = 24;

TODO: if(temp > 0 && temp <= 30) {
    console.log("The weather is GOOD!")
} else {
    console.log("The weather is BAD!")
}

TODO: if(temp > 0 || temp <= 30) {
    console.log("The weather is GOOD!")
} else {
    console.log("The weather is BAD!")
}

TODO: const isSunny =  false;

if(!isSunny) {
    console.log("It is CLOUDY");
} else {
    console.log("It is SUNNY");
}

*/










/*  FIXME: STRICT EQUALITY

    = assignment operator
   == comparison operator (compare if values are equal)
  === strict equality operator (compare if values & datatype are equal)
   != inequality operator
  !== strict inequality operator

const PI = 3.14;

// TODO:
if(PI == "3.14") {
    console.log("That is Pi");
} else {
    console.log("That is not Pi");
}

// TODO:
if(PI === "3.14") {
    console.log("That is Pi");
} else {
    console.log("That is not Pi");
}

// TODO:
if(PI != "3.14") {
    console.log("That is not Pi");
} else {
    console.log("That is Pi");
}

// TODO:
if(PI !== "3.14") {
    console.log("That is not Pi");
} else {
    console.log("That is Pi");
}

*/










/*  WHILE LOOP 
    repeat some code WHILE some condition is true

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


*/










/*  FOR LOOP
    repeat some code a LIMITED amount of time

for(let i = 0; i <=20; i++) {

    if(i == 13) {
        continue;  // to skip an iteration
    } else {
        console.log(i);

    }

}

*/

