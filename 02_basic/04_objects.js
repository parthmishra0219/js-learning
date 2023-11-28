// const tinderUser = new Object()     // singleton object
const tinderUser = {}   // non-singleton object/object literals


tinderUser.id = "1234"
tinderUser.name = "parth sarthy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser ={
    email : "parth0219@gmail.com",
    fullname:{
        userfullName: {
            firstName: "parth",
            lastName:  "sarthy"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstName);


const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"c" ,4:"d"}
const obj3 = {5:"e" ,6:"f"}

// const obj3 = {obj1 , obj2}

// const obj4 =Object.assign({},obj1,obj2,obj3)

const obj4 ={...obj1, ...obj2,...obj3};  //sperad operator


// console.log(obj4);

const user =[
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:2,
        email:"p@gmail.com"
    },
    {
        id:3,
        email:"p@gmail.com"
    },
    {
        id:4,
        email:"p@gmail.com"
    },
    {
        id:5,
        email:"p@gmail.com"
    }
]
// console.log(user[1].email);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))


// console.log(tinderUser.hasOwnProperty("isLogged"));
// console.log(Object.hasOwn(tinderUser, 'isLoggedIn'));


// De-structuring 

const course={
    courseName: "javascript hindi",
    price: 999,
    courseInstructor: "Parth Sarthy"
}

const {courseInstructor: instructor} = course        //de-structuring

console.log(instructor);



{
    "name":"parth",
    "coursename":"js-hindi",                      // JSON
    "price": "free"
}


[
    {},
    {},                                    // JSON in array formate
    {},
    {}
]

