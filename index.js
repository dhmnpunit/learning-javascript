/*  VARIABLE SCOPE 
    where a variable is recognized 
    and accessible (local and global)

*/

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