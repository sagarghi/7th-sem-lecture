// *primitive data types
//string =>'Hello world'
//numbers => 1
//boolean =>true/false
//symbol => 
//BigInt
//undefined
//null

//Reference types
// Object
// Array
// Function

//i

const str = "Hello world"
const str1 = 'Hello world'
const str3 = `Hello world`

console.log(str, str1, str3)

const num = 1.3434343343
console.log(num)

const isAdmin = true

let num = null
console.log(num)
//goal score
num = 1

console.log(num)

function add() {
    console.log("Hello world")
}
console.log(add())

const sym = Symbol("desc")
const sym1 = Symbol('desc')

console.log(sym === sym1)

//BigInt


//rules to follow while declaring the variable
//should not start with number
// should contains spaces between the variable
//should use the reserved keywords


//reference types
// object 
//closely related property group garxau
//{} object literal
// const person = { 
//     height: 6,
//     weight: 70
// }

//array
//list 
const age = [22, 23, 24]
//data structure that use to represent the list of items
const emptyArr = []//brackets   //array literal
console.log(age[2])

//function
//function is one of the fundamental building blocks of js
//parameter
function add(num1, num2) {
    return num1 + num2
}
//arguments
console.log(add(1, 2))


const num = '12'
// Number(num)
// if(typeof num==='string'



