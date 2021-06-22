//primitive data types are shot lived
//while object are long lived in heap

let a = 12

let b = a

console.log(a, b)


a = 14
console.log(a, b)


let person1 = { name: "Hari", age: 12 }

let person2 = person1

console.log(person1, person2)

person1.name = "Ram"

console.log(person1, person2)