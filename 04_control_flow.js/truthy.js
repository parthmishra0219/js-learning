/*  
falsy values
--------------

false , 0 , -0 , BigInt On, "" , null , undefined , NaN



truthy value
-------------

"0" , "false", " ", [] , {} , funtion(){}


*/


// const userEmail =[]

// if(userEmail)
// {
//     console.log("got user email");
// }else {
//     console.log("Don't have user email");
// }





// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj ={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}



// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1= 5 ?? 10                         // 5
// val1 = null ?? 10                    // 10
// val1 = undefined ?? 15               // 15
// val1 = null ?? 10 ?? 20              //10


// console.log((val1));




//      Terniary operator

//       condition ? true : false

const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");




