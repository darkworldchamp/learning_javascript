// singleton
// object literals

const mysym= Symbol("key")
//to change datatype of mysym we will include the mysym inside "[]"

const jsUser= {
    name:"Nikhil",
    "full name":"Nikhil Sharma",
    [mysym]:"mykey",
    email:"sharmanikhil5388@gmail.com",
    location:"kota",
    idLoggedIn: false,
    lasLoginDays:["monday","sunday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser[mysym])

jsUser.email="picsharma@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "nikhil@gmail.com"
console.log(jsUser);

jsUser.greeting= function(){
    console.log("hello user");
    
}
jsUser.greeting2= function(){
    console.log(`hello user, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

