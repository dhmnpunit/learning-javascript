/*  ARROW FUNCTIONS
    a concise way to write function expressions
    good for simple functions that you use only once
    (parameters) => some code


 */

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