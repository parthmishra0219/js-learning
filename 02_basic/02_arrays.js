const marvel_heros =["thor", "ironman" , "spiderman"]
const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros)  //push() method push will push in original array. 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros); // concat() method will totally return new array without changing originnal array .
// console.log(allHeros);


//+++++++++++++++++++++++++++ Spread() ++++++++++++++++++++++++

const all_new_heros = [...marvel_heros, ...dc_heros]  //sperad() operator will sperad all the element in array.
// console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

//++++++++++++++++++++++ flat() ++++++++++++++++++++++++++++++++++++

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);



console.log(Array.isArray("parth"));   // "isArray()"  will check whether the give element is array or not .
console.log(Array.from("parth"));     // "from()" will change the given element into array.


console.log(Array.from({name:"parth"}));  // it will give the output as empty array beacause ,it will not able to understand ,how it has to take information in key, value.


let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3)); //"of()" method will return a new array from set of new element.