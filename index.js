/*  FIXME: OBJECT
    a collection of related properties and/or methods
    can represent real world injects (people, products, places)
    object = {key: value
              function()}


 */

//  TODO:
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () {
        console.log(`Hi! I am ${person1.firstName} ${person1.lastName}`);
    },
    eat: () => console.log(`${person1.firstName} is eating a Krabby Patty`)
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function () {
        console.log(`Hi! I am ${person2.firstName} ${person2.lastName}`)
    },
    sayNamaste: () => console.log(`Namaste! I am ${person2.firstName} ${person2.lastName}`),
}

console.log(`${person1.firstName} ${person1.lastName} is ${person1.age} years old.`);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person1.sayHello();
person2.sayHello();
person2.sayNamaste();
person1.eat();