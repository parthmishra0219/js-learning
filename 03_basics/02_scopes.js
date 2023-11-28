// // var c = 300
let a = 300


if (true) {
    let   a = 10
    const b = 20
    var   c = 30

    // console.log("Inner:", a);
}





// console.log(a);        // a is not defined
//  console.log(a);       // a=300
// console.log(b);          //  b is not defined
// console.log(c);      //     output =30 ( thats where scope needed in javascript because "var" does not understand block scope)


function one() {
    const username = "Parth"

    function two() {
        const website = " youTube"
        console.log(username);

        
    }
    // console.log(website);

    two()
    
}

// one()


if (true) {
    const username = "parth sarthy"
    if (username === "parth sarthy") {

        const website = " youTube"
        // console.log(username+ website);

        
    }
    // console.log(website);    // website is not define in the scope 
    
}
// console.log(username);     //   username is not define in the scope







//++++++++++++++++++++++++++++++++++++++++     interesting     ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Regular function 

console.log(addone(5));   //output = 6 (hoisting happen )

function addone(num) {
    return num+1
    
}




console.log(addTwo(5));     //output= Cannot access 'addTwo' before initialization ( hoisting does not happen in function expression)

// function expression
const addTwo = function (num) {
    return num+2
}

