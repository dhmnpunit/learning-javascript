/*  STRING METHODS 
    allow you to manipulate and work with text (strings)


*/



let userName = "PunitDhiman";
let newName = "punit     ";

// .charAt() 
console.log(userName.charAt(5));

// .indexOf() .lastIndexOf()
console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("i"));

// .length()
console.log(userName.length);

// .trim()
newName = newName.trim();
console.log(newName);

// .toUpperCase()
console.log(userName.toUpperCase());

// .toLowerCase()
console.log(userName.toLowerCase());

// .repeat()
console.log(userName.repeat(3));

// .startsWith()
console.log(userName.startsWith("P"));

// .endsWith()
console.log(userName.endsWith("n"));

// .includes()
console.log(userName.includes("D"));



let phoneNumber = "123-456-7890";

// .replaceAll()
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

// .padStart()
phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);

// .padEnd()
phoneNumber = phoneNumber.padEnd(20, "0");
console.log(phoneNumber);