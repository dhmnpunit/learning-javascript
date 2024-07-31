/*  FIXME: FUNCTION EXPRESSION

FUNCTION DECLARATION
    define a reusable block of code
    that performs a specific task

TODO: function hello () {
    console.log("Hello");
}

FUNCTION EXPRESSIONS
    a way to define functions as values or variables




 */

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