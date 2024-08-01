/*  SUPER
    keyword is used in classes to call the parent constructor
    or access the properties and method of a parent (superclass)

    this = this object
    super = parent object

 */

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} moves at a speed of ${this.speed} km/h`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit('Bunny', 2, 10);
const fish = new Fish('Nemo', 1, 5);
const hawk = new Hawk('Eagle', 3, 20);

console.log(rabbit.name);
console.log(fish.name);
console.log(hawk.name);

console.log(rabbit.age);
console.log(fish.age);
console.log(hawk.age);

console.log(rabbit.runSpeed);
console.log(fish.swimSpeed);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();

