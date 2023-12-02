const myNumbers = [1,2,3,4,5,6,7,8,9,10]


//Add 10 to every element

//   const myNewNums = myNumbers.map( (nums) => nums + 10  )

//   console.log(myNewNums);

// const myNewNums = myNumbers.map( (nums) => {
//     return nums+10 ;
// })


const myNewNums = myNumbers
.map( (nums) => nums * 10)
.map( ( nums) => nums+1 )
.map( ( nums) => nums+31 )
.filter( (nums) => nums >= 90)

console.log(myNewNums);