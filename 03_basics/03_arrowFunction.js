const user ={
    username: "parth",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
       console.log(this); 
    }

}

// user.welcomeMessage()
// user.username ="sam"

// user.welcomeMessage()

// console.log(this);


// function chai() {                    //Regular function/function declaration
//     let username= "parth"
//     console.log(this.username);   //undefined
    
// }
// chai()





// const chai = function(){    // function expression
//     let username= "parth"
//     console.log(this.username);
// }




// const chai = () => {           //Arrow function
//     let username= "parth"
//     console.log(this);
// }

// chai()






// const addTwo = (num1,num2) =>{                   //explicit return
//     return num1 + num2
// }




// const addTwo = (num1,num2) =>  num1 + num2           //implicit return






// const addTwo = (num1,num2) =>  (num1 + num2)           //using parenthesis



const addTwo = (num1,num2) =>  ({username:"parth"})       


console.log(addTwo(3,4));



const myArray =[2,5,3,7,8]
 






