//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());


// console.log(typeof myDate); //typeof = object .

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date("2023-01-14")         //date = (yy-mm-dd)
let myCreatedDates = new Date("01-14-2023")       // date = (mm-dd-yy)

// console.log(myCreatedDate.toString());

// console.log(myCreatedDates.toDateString());


//++++++++++++++++++++++++++++++++++ time +++++++++++++++++++++++++++++++++

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // convert from milesecond = second .


let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getMonth()+1);



console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`);




newDate.toLocaleString('default',{         //important topic  toLocaleString()
    weekday:"long"
})















































