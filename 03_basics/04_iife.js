  // Immediatly Invoked Function Expressions (IIFE)


  (function chai() {                        // Regular function
    console.log(`DB Connection`);          //  iife is to elemate the polution of function in the global scope.
    
  })();


 ( () => {                               // Arrow function
    console.log(`DB Connection Two`);
 }) () ;

 ( function arocode(name) {
  //named IIFE
     console.log(`DB connection Three ${name}`);
 }) ("parth");


 ( (name)=>{
  //simple IIFE
  console.log(`DB connection Four ${name}`);

 } ) ("parth")