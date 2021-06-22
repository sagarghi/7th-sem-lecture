// const person = {
//     name: "Hari",
//     age: 25,
//     surname: "Thapa"
// }

// let name = "Hari";
// let age = 25


//object =>collection of key value pairs
// const person = {
//     name: "Hari",
//     age: 25,
//     surname: "Thapa"
// }

// let name = "Hari";
// let age = 25


//object =>collection of key value pairs
console.log("a")
const randomNumber = Math.random()
const person = {
    name: 'Hari',
    // key:value
    "This is the advanced property": 25,
    isHealthy: true,
    // method
    walk: function () {
        return "I'm walking"
    },
    hair: {
        color: 'red',
        thickness: '',
        density: ""
    },
    [randomNumber]: 'This is a random Number'
}
// const phone = {
//     number: 2323232,
//     callingCode: '+977'
// }
// console.log(person && person.phone && person.phone.number)

console.log(person?.phone?.number)
// console.log(person['This is the advanced property'])
// console.log(person.walk())