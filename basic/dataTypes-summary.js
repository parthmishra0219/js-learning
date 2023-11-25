// Primitive 

/* 7 types : string
             Number
             Boolearn
             null
             undefined
             Symbol
             BigInt
*/

/* Reference ( Non-Primitive)
    
   =  Array
      Objects
      Functions


      */

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outSideTemp = null

let useEmail;


const id = Symbol('123')
const anotherId = Symbol ('123')          // Symbol


// console.log( id === anotherId);    // false



const bigNumber = 34343434343434343434343434n

// console.log(typeof bigNumber);    // bigint





const heros = ["shaktiman", " naagraj" , "doga"];   // return type = object function

let myObj ={
    name : "parth",
    age : 23,
}


const myFunction = function(){        // return type = object function
    console.log("Hello world");
}

console.log(typeof anotherId);