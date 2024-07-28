/*  ARRAY
    a variable like structure that can hold 
    more than 1 value


*/

let fruits = ["apple", "orange", "banana",];

console.log(fruits);  // prints the whole array


// prints the nth element of the array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);  // this will print undefined because array is 0-indexed


fruits[2] = "coconut";
console.log(fruits); 


// adding a new element to the end of the array
fruits.push("mango");
console.log(fruits);


// adding a new element to the beginning of the array
fruits.unshift("kiwi");
console.log(fruits);


// removing the first element from the array
fruits.shift();
console.log(fruits);


// removing the last element from the array
fruits.pop();
console.log(fruits);


// prints the number of elements in the array
console.log(fruits.length);  


// finding the index of an element
let index = fruits.indexOf("grape");
console.log(index);


// looping through an array
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}  


// sort the array
fruits.sort();
console.log(fruits);


// sort the array in reverse
fruits.sort().reverse();
console.log(fruits);


// reversing the array
fruits.reverse();
console.log(fruits);


// adding an element at a specific index
fruits.splice(1, 0, "grape");
console.log(fruits);


// removing an element at a specific index
fruits.splice(2, 1);
console.log(fruits);


// checking if an array contains an element
let containsGrape = fruits.includes("grape");
console.log(containsGrape);


// converting an array to a string
let stringifiedArray = fruits.join(", ");
console.log(stringifiedArray);


// converting a string to an array
let splitArray = stringifiedArray.split(", ");
console.log(splitArray);
