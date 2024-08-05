/*  FIXME : Getter and Setter
    getter = special method that makes a property readable
    setter = special method that makes a property writable


    validate and modify a value when reading/ writing a property

    getter and setter are used to define a property of an object, but they are not properties themselves




 */

// TODO: Example 1
class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width (newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be positive");
        }
    }

    set height (newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be positive");
        }
    }

    get width() {
        return `${this._width.toFixed(1)}cm`;
    }

    get height() {
        return `${this._height.toFixed(1)}cm`;
    }

    get area() {
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 10;
rectangle.height = 5;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);




// TODO: Example 2
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a string");
        }
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.error("Age must be positive");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

}

const person = new Person("punit", "dhiman", 17);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName)