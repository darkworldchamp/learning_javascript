const myarr = [1,2,3,4,5,6]



// myarr.push(12)

 // myarr.pop();
// myarr.unshift(0) // placing an element at front
// myarr.shift() // placing an element at front


// console.log(myarr.includes(45)) // return bool value for - if element is present or not
// console.log(myarr.length)
// console.log(myarr.indexOf(45))
 
const newarr= myarr.join();
console.log(typeof newarr)

// Slice , Splice 
//const myarr = [1,2,3,4,5,6]

console.log("A", myarr);
const  myn1  =  myarr.slice(1,3)
 console.log(myn1);


console.log("B",myarr);
const  myn2  =  myarr.splice(1,3)
console.log("C",myarr);
console.log(myn2);
 
