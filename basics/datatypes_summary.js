//primitive
// 7 types of data types: Number , String,Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.2;
// js is a mdynamically typed language means we do not neccessarily have to define the datatype
// In typescript we have to define the datatype

const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail;

const id = Symbol("123"); //symbol

const anotherId = Symbol("123");
console.log(id == anotherId);

const bigNumber = 32883768384682;

// Refrence( non primitive)

//Array , objects, Functions

const heroes = ["shaktiman", "baalveer", "flying jatt"]; // array declaration
let myobj = {
  name: "nikhil",
  age: 21,
}; // object

const myfunction = function () {
  console.log("hello");
};

console.log(typeof outsidetemp);
