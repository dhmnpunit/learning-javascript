/*  SPREAD OPERATOR 
    ... allows an iterable such as an array or string 
    to be expanded in separate elements
    (unpack the elements)



*/


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