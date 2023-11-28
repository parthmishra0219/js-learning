



function sayMyName () {

//  console.log("p");
// console.log("a");
// console.log("r");
// console.log("t");
// console.log("h");

}

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

console.log(loginUserMessage("sam"));           // this will overide the given default value as a "parth " to "sam"
// console.log(loginUserMessage(" "));         // nothing has passed 
// console.log(loginUserMessage());           // this will return undefined.        