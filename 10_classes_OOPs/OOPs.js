const user ={
    username: 'parth',
    loginCount:  8,
    signedIn: true,


    getMyuserDetails :function (){
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getMyuserDetails());
// console.log(this);






//constructor function




// const promiseOne = new Promise()
// const date = new Date()


function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

   this.greeting = function(){
    console.log(`welcome ${this.username}`);
   }



    return this
}



const userOne =  new User('parth', 2 , true)
const userTwo =  new User('sarthy', 4 , false)


console.log(userOne.constructor);
// console.log(userTwo);

/*    "new" keyword

step 1: by using "new" keyword constructor function created a new object each time.

step 2: constructor function called by "new" keyword.

step 3: arguments and this keyword will  injected in new object.

step 4: we will get inside the function. 

*/
