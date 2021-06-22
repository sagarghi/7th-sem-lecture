//operators 
//operators are those that performs some oprations on operands and produce some result
// 5+5=10

//arithmetic operators
//assignment operators
//comparison
//logical
//bitwise
//ternary operators => TODO


// arithmetic operators
// + - * / % ++ --
const result = 5 + 5
// console.log(result)

//comparison operators
// ==  === != > < >=  <=
// difference == & === is that === checks the types too

// logical  operators
//&& || !

const ramAge = 12
const hariAge = 13

// console.log(ramAge === 12 && hariAge === 13)

// /assignment operators
// = += -= /= %=

const arr = [1, 2]

let num1 = 5
let num2 = 10

num1 = num1 + num2

console.log(num1)


//bitwise 
//  |  &  


//Bitwise and &
// 1=> 00000001
// 2=> 00000010
//3=>  00000011


// digital logics
// 1 1=>1

//15 =>00001111

function isOdd(int) {
    return (int & 1) === 1
}

console.log(isOdd(15))

// Bitwise not
// uniary opeator ~
// A => -(A+1)
// 70 =>-71

// Array.indexOf()

//cryptograoh
// permissions

// role={isAdmin:true,isOperator:false}
// 0000100
const readPermission = 4
const writePermission = 2
const executePermission = 1

let permission = 0
permission = readPermission | writePermission



//read,write,execute,delete

//Bitwise OR (|)
// 1 =>       00000001
// 2 =>       00000010
// result=>   00000011 =>3

//Bitwise AND (&)
// 1 =>       00000001
// 2 =>       00000010
// result=>   00000000 =>0





//precedence
// BODMAS

const a = 12
const b = 13
const c = 14

console.log(a * b + c)
console.log(a * (b + c))
