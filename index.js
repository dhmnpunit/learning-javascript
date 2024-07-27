/*  TERNARY OPERATOR 
  - a shortcut to if{} and else{} statements
    helps to assign a variable based on a condition
    condition? codeIfTrue : codeIfFalse;


*/


// let age = 12;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message);



// let time = 9;
// let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
// console.log(greeting);



// let isStudent = true;
// let message = isStudent ? "You're a student" : "You're not a student";
// console.log(message);



let purchaseAmount = 1000;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - (purchaseAmount * (discount/100))}`);