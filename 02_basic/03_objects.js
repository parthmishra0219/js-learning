// singleton
//object.creat. // this will creat through constractor

const mySymbol= Symbol("key1")
// object literals
const JsUser = {
    name:"Parth",
    "full name": "parth sarthy",
    [mySymbol]: "mykey1",            // define symbol datatypes
    age: 23,
    location: "gaya",
    email: "parth@gmail.com",
    isLoggedIn: false,
    LastLoggedInDay:["monday", "sunday"]

}
//   console.log(JsUser.email);
//   console.log(JsUser["email"]);
//   console.log(JsUser["full name"]);
  
//   console.log(JsUser[mySymbol]);     // this is how we need to define the symbol datatypes.
//   console.log(typeof JsUser[mySymbol]);

JsUser.email ="parthsarthy@gmail.com"
// Object.freeze(JsUser)  // freeze() will freeze the email value, now any changes will not impect on the email.

// console.log(JsUser.email);
JsUser.email ="parthsarthy0219@gmail.com"
// console.log(JsUser.email);

// console.log(JsUser);


  JsUser.greeting = function() {
    console.log("hello js world");
    
}
JsUser.greetingTwo = function() {
    console.log(`hello js world ${this.name}`);
    
}

// console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());








