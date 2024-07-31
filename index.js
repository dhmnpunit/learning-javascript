/*  FIXME: static
    keyword that defines properties or methods that belong
    to a class itself rather than the object created
    from the class (class owns anything static, not the objects)


 */

// TODO:
class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.getDiameter(10)); // 20
console.log(MathUtil.getCircumference(10)); // 62.8318
console.log(MathUtil.getArea(10)); // 314.159




// TODO:
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`Total users: ${User.userCount}`);
    }

    sayHello() {
        console.log(`Hello, I'm ${this.username}`);
    }

}

const user1 = new User('Punit');
const user2 = new User('Prince');
const user3 = new User('Raj');


user1.sayHello(); // Hello, I'm Punit
user2.sayHello(); // Hello, I'm Prince
user3.sayHello(); // Hello, I'm Raj

User.getUserCount(); // Total users: 3