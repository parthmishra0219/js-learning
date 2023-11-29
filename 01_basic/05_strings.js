const name ="parth"
const repoCount= 50

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('parth-sarthy')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-10,3);
console.log(anotherString);


const newStringOne = "   Parth   "

console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://www.google.comm"

console.log(url.replace('m','/'));
console.log(url.includes('google'));