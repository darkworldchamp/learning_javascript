const marvelheros = ["thor", "Ironman","spiderman","wanda" ]

const dcheros = ["superman", "batman", "flash"]

//now we are merging two arrays 

//1.
// marvelheros.push(dcheros)
// console.log(marvelheros[4][1]);
// console.log(marvelheros);


// 2.
// const allheros = marvelheros.concat(dcheros)
// console.log(allheros);

// 3.
// spread operator (...arr1_name,...arr2_name, ...arr3 //and so on)
// const allheros= [...marvelheros,...dcheros]
// console.log(allheros);


const another_arr = [1,2,3,4,[23,12,53],[12,34]]

// flat return an  array will every element irrespective of the depth inside an array
const another_arr2= another_arr.flat(Infinity)
console.log(another_arr2);

// to check if something is array 
console.log(Array.isArray("Nikhil"));

// to convert in an array 
console.log(Array.from("Nikhil"));

console.log(Array.from({name:"Nikhil"}));//intresting

let score1 = 100
let score2 = 200
let score3= 300
// of also return an array irrespective of datatypes
console.log(Array.of(score1,score2,score3));





