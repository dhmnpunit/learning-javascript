/*  REST PARAMETERS
    (...rest) allow a function work with a variable 
    number of arguments by bundling them into an array

    spread = expands an array into separate elements
    rest = bundles separate elements into an array



    */


// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "fries";
// const food4 = "pasta";
// const food5 = "sushi";

// function openFridge(...foods) {
//     console.log(...foods);
// }

// function getFood(...foods) {
//     return foods;
// }

// // openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);





function sum(...numbers) {

    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8);

console.log(total);




function getAverage(...numbers) {
    
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const average = getAverage(1, 2, 3, 4, 5, 6, 7, 8);

console.log(average);





function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III" )
console.log(fullName);