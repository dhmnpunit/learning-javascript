/*  CALLBACKS
    a function that is passed as an argument

    used to handle asynchronous operations:
    1. Reading a file
    2. Network requests
    3. Interacting with databases

    "Hey, when you're done,  call this next."


 */

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
