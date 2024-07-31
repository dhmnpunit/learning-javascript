/*  CLASSES
    (ES6 feature) provides a more structured and cleaner way to
    work with objects compared to traditional constructor functions
    ex. static keyword

 */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}` );
        console.log(`Price: ₹${this.price.toFixed()}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 1999);
const product2 = new Product("Pants", 2599);
const product3 = new Product("Underwear", 700);
const total = product1.calculateTotal(salesTax);
const total2 = product2.calculateTotal(salesTax);
const total3 = product3.calculateTotal(salesTax);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
console.log(`Total price (including tax) ₹${total.toFixed(2)}`);
console.log(`Total price (including tax ₹${total2.toFixed(2)})`);
console.log(`Total price (including tax ₹${total3.toFixed(2)})`);