// Array
//these three types be can decleared Array
const myArr =[ 0,1, 2, 3, 4, 5]
const myHeros =["shaktiman", "naagraj", "chinchan"]
const myArr2 = new Array(1,2,3,4)


// console.log(myArr2[1]);



// Array Methods

//+++++ push() Method. ++++++


// myArr.push(6)   // push() method will add element to the array

// console.log(myArr);


// +++++++++.   pop() Mehtod +++++++++++++

// myArr.pop(6)   // pop() method will delete last element from array 

// console.log(myArr);


// +++++++++.   unshift() method  ++++++++++++++++++++++++++++++++++++++++++++

// myArr.unshift(6) // unshift() method will add element in first position of the array element.

// console.log(myArr);

// ++++++++++++   shift() method  ++++++++++++++++++++++++++++++++ 


// myArr.shift().  //  shift() method will remove first  element from Array



// console.log(myArr);


// ++++++++++++ includes() method ++++++++++++++++++++ 

// includes() method use to ask question only in array .
//  includes () method gets output in boolean datatypes (true/false).

// console.log(myArr.includes(5));

// ++++++++++++++++ indexOf() +++++++++++++++++++++++++

// indexOf() method will gives the index of the element.
// if the element is not available in array then it will give -1 as a output.

// console.log(myArr.indexOf(5));


//+++++++++++++++++++.      join() method ++++++++++++++++++++++++++

// join() method  add all the elements of an array into a String.and give output as a string 

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr); // string



// +++++++++++    slice() method, splice() method     +++++++++++++++++++++++++++++++

// slice() method  returns a copy of a section of an array but it doesn't affect the original array.

console.log("A", myArr);

const mynewArr = myArr.slice(1,3);


console.log(mynewArr);

console.log("B", myArr);

//++++++++++++++++++ splice() method  ++++++++++++++++++++++++++

//

const mynewArr2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(mynewArr2);



