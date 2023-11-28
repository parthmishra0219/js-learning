



// function sayMyName () {

//  console.log("p");
// console.log("a");
// console.log("r");
// console.log("t");
// console.log("h");

// }

// sayMyName()


// function addTwoNumbers(number1 , number2)

// {
//    console.log(number1 + number2); 
// }




// function addTwoNumbers(number1 , number2)

// {
//    let result = number1 + number2
//    return result; 
//    console.log("parth");           // this will not give the output because  "return"  is the last execution in the function.
// }



// function addTwoNumbers(number1 , number2)

// {
//      return number1 + number2

// }


//   const result = addTwoNumbers(3,5);

//  console.log("Result :",result);    





// addTwoNumbers(3,null);
// addTwoNumbers(3,"a");
// addTwoNumbers(3,"4");






function loginUserMessage(username ="parth"){
    // if (username === undefined) {
    //     console.log("plz enter a username");
    //     return
        
    // }

    if (!username ) {
        console.log("plz enter a username");
        return
        
    }
    return`${username} just logged in`

}

// console.log(loginUserMessage("sam"));           // this will overide the given default value as a "parth " to "sam"

// console.log(loginUserMessage(" "));         // nothing has passed 
// console.log(loginUserMessage());           // this will return undefined.        





// function calculateCartPrice(num1) {

//     return num1
    
// }
// console.log(calculateCartPrice(2))     // output = 2


// function calculateCartPrice(...num1) {

//     return num1
    
// }
// console.log(calculateCartPrice(200,300,400))     // output =[200,300,400]




// function calculateCartPrice(val1,val2, ...num1) {

//     return num1
    
// }
// console.log(calculateCartPrice(200,300,400,500))     // output =(val1= 200 ,val2=300,  num1= [400,500])


const user = { 
    username : "parth",
    price : 199
}

function handleObject(anyobject) {
   console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user)
 handleObject({
    username : "parth",
    price : 199
 })



 const myNewArray =[200,300,400,600]

 function returnSecondvalue(getArray){

    return getArray[1]
    
 }

 console.log(returnSecondvalue(myNewArray));
//  console.log(returnSecondvalue([200,300,400,600]));

