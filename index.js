/*  FUNCTION
    a section of reusable code
    declare code once, use it whenever you want.
    call the function to execute that code.



*/

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