const name= "Nikhil"
 const repocount = 12

 //console.log(name + repocount + "Value") // Outdated
 

 // string interpolation , modern method
 //using   - (``) backtags 
 console.log(`hello my name is ${name} and my repo count is ${repocount}`)

// another way of declaring a string 

const gameName = new String ('nik-hil-Sharma')

console.log(gameName[0])

console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))

//to make substring
const newstring= gameName.substring(0,4)
console.log(newstring)

//negative values counts from reversed string
const new2string = gameName.slice(-8,4)
console.log(new2string)


//trim removes whitespaces
const newstring1  ="   Nihkil     "
console.log(newstring1)
console.log(newstring1.trim());
// to remove whitespaces from one end we can use trimStart() or trimEnd()

// url doesnt accept whitespace in between and convert it into '%20' 
//so to replace it :
const url= "https://nikhil.com/nikhil%20sharma"

console.log(url.replace('%20','-'))

console.log(url.includes('nikhil'))

// split creates an array of string on the basi of passed saperator
// in this case  '-' is a saperator
console.log(gameName.split('-'))