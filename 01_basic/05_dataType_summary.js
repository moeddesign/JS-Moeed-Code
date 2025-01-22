//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // Number

const isLoggedIn = false // Boolean
const outsideTemp = null //Null
let userEmail; // undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n // BigInt 



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myObj = {  // Object
    name: "hitesh", 
    age: 22,
}

const myFunction = function(){ //  function
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ***************************************

// Stack (Primitive , Heap (Non Primitive))

let myYoutubename = "Moeeddotgmail.com"

let anotherName = myYoutubename
 anotherName = "malik"
console.log(anotherName);
