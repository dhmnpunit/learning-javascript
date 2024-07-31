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










/*  FIXME: WHILE LOOP 
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










/*  FIXME: FOR LOOP
    repeat some code a LIMITED amount of time

for(let i = 0; i <=20; i++) {

    if(i == 13) {
        continue;  // to skip an iteration
    } else {
        console.log(i);

    }

}

*/












/*  FIXME: NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running) {

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    } else {
        attempts++;
        if(guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!")
        } else if(guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!")
        } else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`)
            running = false;
        }
    }

   
}

*/










/*  FIXME: FUNCTION
    a section of reusable code
    declare code once, use it whenever you want.
    call the function to execute that code.

// these are parameters
function happyBirthday(userName, age) {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${userName}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);
    
}


// (_,_) these are known as arguments, they are data that you send to a function
happyBirthday("Punit", 18); 
happyBirthday("Spongebob" , 30);
happyBirthday("patrick", 37);



function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}


function isEven(number) {

    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function isEmailValid(email) {

    if(email.includes("@")) {
        return true;
    } else {
        return false;
    }
}

// OR ------- TERNARY OPERATOR --------

function isValidEmail(email) {
    return email.includes("@") ? true : false;
}


console.log(subtract(4,3));
console.log(add(3,4));
console.log(isEven(13));
console.log(isEmailValid("Punit@fake.com"));
console.log(isValidEmail("Punit@Fake.com"));

*/










/*  FIXME: VARIABLE SCOPE 
    where a variable is recognized 
    and accessible (local and global)

// we have 2 variable with the same name in the program , that's legal as long as they have different scopes 
// any variable declared inside of a function is a local scope 

function function1() {
    let x = 1;
    console.log(x);
}

function function2() {
    let x = 2;
    console.log(x);
}

*/










/*  FIXME: TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convert(){
    if(toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F "
    } 
    else if(toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C "
    }
    else {
        result.textContent = "Select a Unit";
    }
}


*/










/*  FIXME: ARRAY
    a variable like structure that can hold 
    more than 1 value


let fruits = ["apple", "orange", "banana",];

console.log(fruits);  // prints the whole array


// TODO: prints the nth element of the array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);  // this will print undefined because array is 0-indexed


fruits[2] = "coconut";
console.log(fruits); 


// TODO: adding a new element to the end of the array
fruits.push("mango");
console.log(fruits);


// TODO: adding a new element to the beginning of the array
fruits.unshift("kiwi");
console.log(fruits);


// TODO: removing the first element from the array
fruits.shift();
console.log(fruits);


// TODO: removing the last element from the array
fruits.pop();
console.log(fruits);


// TODO: prints the number of elements in the array
console.log(fruits.length);  


// TODO: finding the index of an element
let index = fruits.indexOf("grape");
console.log(index);


// TODO: looping through an array
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}  


// TODO: sort the array
fruits.sort();
console.log(fruits);


// TODO: sort the array in reverse
fruits.sort().reverse();
console.log(fruits);


// TODO: reversing the array
fruits.reverse();
console.log(fruits);


// TODO: adding an element at a specific index
fruits.splice(1, 0, "grape");
console.log(fruits);


// TODO: removing an element at a specific index
fruits.splice(2, 1);
console.log(fruits);


// TODO: checking if an array contains an element
let containsGrape = fruits.includes("grape");
console.log(containsGrape);


// TODO: converting an array to a string
let stringifiedArray = fruits.join(", ");
console.log(stringifiedArray);


// TODO: converting a string to an array
let splitArray = stringifiedArray.split(", ");
console.log(splitArray);


*/










/*  FIXME: SPREAD OPERATOR 
    ... allows an iterable such as an array or string 
    to be expanded in separate elements
    (unpack the elements)

let numbers = [1, 2, 3, 4, 5]
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(max);
console.log(min);



let userName = "Punit";
let letters = [...userName].join("-");;

console.log(letters);



let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrot", "celery", "potatoes"];


let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);

*/










/*  FIXME: REST PARAMETERS
    (...rest) allow a function work with a variable 
    number of arguments by bundling them into an array

    spread = expands an array into separate elements
    rest = bundles separate elements into an array


const food1 = "pizza";
const food2 = "hamburger";
const food3 = "fries";
const food4 = "pasta";
const food5 = "sushi";

// TODO:
function openFridge(...foods) {
    console.log(...foods);
}

// TODO:
function getFood(...foods) {
    return foods;
}

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);




// TODO:
function sum(...numbers) {

    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8);

console.log(total);



// TODO:
function getAverage(...numbers) {
    
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const average = getAverage(1, 2, 3, 4, 5, 6, 7, 8);

console.log(average);




// TODO: 
function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III" )
console.log(fullName);

    */










/*  FIXME: DICE ROLLER PROGRAM

function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice-images/${value}.png" alt="Dice ${value}" >`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

    console.log(values);

}

*/










/* FIXME: RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase? upperCaseChars : "";
    allowedChars += includeNumbers? numbersChars : "";
    allowedChars += includeSymbols? symbolsChars : "";

    if(length <= 0) {
        return `(password length must be at least 1)`
    }

    if(allowedChars.length === 0) {
        return `(at least one set of characters needs to be selected)`
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength,
                                includeLowerCase,
                                includeUpperCase,
                                includeNumbers,
                                includeSymbols);

console.log(`Generated password: ${password}`);

*/










/*  FIXME: CALLBACKS
    a function that is passed as an argument

    used to handle asynchronous operations:
    1. Reading a file
    2. Network requests
    3. Interacting with databases

    "Hey, when you're done,  call this next."

sum(displayPage, 1, 2);

function hello(callback) {
    console.log("Hello!");
    callback();
}

function wait() {
    console.log("Wait!");
}

function leave() {
    console.log("leave!");
}

function goodbye() {
    console.log("Goodbye!");
}

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}


 */










/*  FIXME: forEach()
    method used to iterate over the elements
    of an array and apply a specified function (callback)
    to each element

    array.forEach(callback);
    element, index, array are provided


let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function display(element) {
    console.log(element);
}


 */










/*  FIXME: .map()
    accepts a callback and applies that function
    to each element of an array, then returns a new array

// TODO:
const numbers = [1, 2, 3, 4, 5,];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);
console.log(squares);
console.log(cubes);

function cube(element) {
    return Math.pow(element, 3);
}

function square(element) {
    return Math.pow(element, 2);
}



// TODO:
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(students);
console.log(studentsUpper);
console.log(studentsLower);


function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}



//TODO:
const dates = ["2024-07-30", "2025-06-20", "2026-05-10"]
const formattedDates = dates.map(formatDates);

console.log(dates);
console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}



 */










/*  FIXME: .filter()
    creates a new array by filtering out elements

// TODO:
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}




//  TODO:
const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChildren);

console.log(ages);
console.log(adults);
console.log(children);


function isAdult(element) {
    return element >= 18;
}

function isChildren(element) {
    return element <18;
}




//  TODO:
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]
const shortWords = words.filter(getShortWords);
const LongWords = words.filter(getLongWords);

console.log(shortWords);
console.log(LongWords);

function getShortWords(element) {
    return element.length <= 6;
}

function getLongWords(element) {
    return element.length > 6;
}

 */










/*  FIXME: .reduce()
    reduce the elements of an array to a single value

//  TODO:
const prices = [5, 30, 10 , 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total}`)

// accumulator = previous element
// element = next element

function sum(accumulator, element) {
    return accumulator + element;
}




//  TODO:
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}

 */










/*  FIXME: FUNCTION EXPRESSION

FUNCTION DECLARATION
    define a reusable block of code
    that performs a specific task

TODO: function hello () {
    console.log("Hello");
}

FUNCTION EXPRESSIONS
    a way to define functions as values or variables

// TODO:
setTimeout(function() {
    console.log('Hello World!');
}, 3000);


// TODO:
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element) {
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element) {
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element) {
    return element % 2 !== 0;
});
const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);


 */










/*  FIXME: ARROW FUNCTIONS
    a concise way to write function expressions
    good for simple functions that you use only once
    (parameters) => some code

// TODO: this is a declared function
function hello() {
    console.log("Hello");
}
hello();


// TODO: function expressions
const hello1 = function () {
    console.log("Hello");
}

// TODO: concise way to write it: Array function
const hello2 = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
};
hello2("Punit", 17);






// TODO: declared function
setTimeout(hello3, 3000);

function hello3() {
    console.log("Hello")
}

// TODO: function expression
setTimeout(function() {
    console.log("Hello");
}, 4000);

// TODO: arrow
setTimeout( () => console.log("Hello") , 5000 );




// TODO:
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map( (element) => Math.pow(element, 2) );
const cubes = numbers.map( (element) => Math.pow(element, 3));
const evenNums = numbers.filter( (element) => element % 2 === 0);
const oddNums = numbers.filter( (element) => element % 2 !== 0);
const total = numbers.reduce( (accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);

 */










/*  FIXME: OBJECT
    a collection of related properties and/or methods
    can represent real world injects (people, products, places)
    object = {key: value
              function()}

//  TODO:
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () {
        console.log(`Hi! I am ${person1.firstName} ${person1.lastName}`);
    },
    eat: () => console.log(`${person1.firstName} is eating a Krabby Patty`)
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function () {
        console.log(`Hi! I am ${person2.firstName} ${person2.lastName}`)
    },
    sayNamaste: () => console.log(`Namaste! I am ${person2.firstName} ${person2.lastName}`),
}

console.log(`${person1.firstName} ${person1.lastName} is ${person1.age} years old.`);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person1.sayHello();
person2.sayHello();
person2.sayNamaste();
person1.eat();

 */










/*  THIS
    reference to the object where THIS is used
    (the object depends on the immediate context)
    person.name = this.name

// TODO:
const person1 = {
    name: "Punit",
    favFood: "Pizza",
    sayHello: function () {
        console.log(`Hi! I am ${this.name} and i like ${this.favFood}.`);
    },
    eat: function () {
        console.log(`${this.name} is eating ${this.favFood}.`);
    }
}

// TODO:
const person2 = {
    name: "Prince",
    favFood: "Burgers",
    sayHello: function () {
        console.log(`Hi! I am ${this.name} and i like ${this.favFood}.`);
    },
    eat: function () {
        console.log(`${this.name} is eating ${this.favFood}.`);
    }
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

 */

