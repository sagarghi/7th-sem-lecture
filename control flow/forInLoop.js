// syntax
//loop through the properties/index of object/index

// for(let i in object){
//     //code 
// }

const arr = ['a', 'b', 'c', 'd']

for (let key in arr) {
    // console.log(arr[key])
}

const person = {
    name: "Hari",
    age: 25,
    surname: "Thapa"
}

for (let key in person) {
    console.log('====================================');
    console.log(key)
    console.log('Value', person[key])
    console.log('====================================');
}