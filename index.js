/*  forEach()
    method used to iterate over the elements
    of an array and apply a specified function (callback)
    to each element

    array.forEach(callback);
    element, index, array are provided


 */

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



