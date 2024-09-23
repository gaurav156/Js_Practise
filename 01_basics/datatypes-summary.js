//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id) // both the o/p are same...Symbol(123)
console.log(anotherId)

console.log(id === anotherId); // false, not same.

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

// type of all Non primitive data types are object
console.log(typeof myFunction); // object function
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigint

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ------------Memory - Stack & Heap

/*
Primitive - Stack -> Copy is returned -> Pass by value
Non-Primite - Heap -> Reference is returned -> Pass by Reference
*/

let email = "gaurav@google.com"
let newEmail = email // Primitive -> Copy is assigned -> Pass by value
newEmail = "user@google.com"
console.log(email) // not changed - gaurav@google.com
console.log(newEmail) // user@google.com

let userOne = {
    email: "gaurav@google.com",
    name: "Gaurav"
}

let userTwo = userOne; // Non-primitive -> Reference is passed -> Pass by reference

userTwo.email = "user@yahoo.com" // changes email of userOne as well

console.log(userOne.email)
console.log(userTwo.email)