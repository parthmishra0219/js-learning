// let myName = "parth      "

// console.log(myName.truelength);
// console.log(myName.trim().length);



let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor: "hammer",
    siperman: "sling",

    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.siperman}`);
    }
}

Object.prototype.parth = function(){
    // console.log(`parth is present in all object`);
}

Array.prototype.heyParth = function(){
    // console.log(`Parth says hello`);
}

// heroPower.parth();
// myHeros.parth();
// myHeros.heyParth();
// heroPower.heyParth();



//inheritance

const User = {
    name:"parth",
    email: "parth@mail.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}



Teacher.__proto__ =  User;



//Modern Syntax of __proto__ inhertance



// Object.setPrototypeOf(TeachingSupport , TASupport)


let anotherUsername = "LearningCodeOnline       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()

"parth".trueLength()
"iceTea".trueLength()


