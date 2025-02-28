// const user=new Object() // singleton object

const user={}
user.id ="123abc"
user.name="nikhil"
user.isLoggedIn= false

const regularuser= {
    email: "somebody@gmail.com",
    fullname: { //object inside object
            firstname: " nikhil",
            lastname:"sharma"
    }
}
// console.log(regularuser.fullname.firstname);

const obj1= { 1:"a",2:"b"}
const obj2= { 3:"a",4:"b"}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


// const obj3={obj1,obj2}  

// or using assign we can pass both object in another one 

// const obj3 = Object.assign(obj1,obj2) //using this method will store obj2 in obj1

// const obj3 = Object.assign({},obj1,obj2) 
// if we pass an empty object in front then both object will be stored in that only

//spread operator(...)
const obj3 = {...obj1 , ...obj2}
console.log(obj3);

