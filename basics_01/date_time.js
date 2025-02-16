// dates

let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)


// declaring date
// months starts from 0 in js
//let myCreatedDate = new Date (2025, 0 , 16 ) 
// let myCreatedDate = new Date (2025, 0 , 16 , 17 ,36 ) 
// let myCreatedDate = new Date ("2025-01-16" )   //(YYYY-MM-DD)
let myCreatedDate = new Date ("02-15-2025")      //(MM-DD-YYYY)


// console.log(myCreatedDate.toLocaleString())


// time stamps
let mytimestamp =  Date.now()

// console.log(mytimestamp)
// console.log(myCreatedDate.getTime());

// to convert milliseconds to second
console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(`today's date is ${newDate.getDate()} `);



