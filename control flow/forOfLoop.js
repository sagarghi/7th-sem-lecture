//iterate over the values of the array

let arr = ['a', 'b', 'c', 'd']

for (let item of arr) {
    console.log(item)
}

const person = {
    name: "Hari",
    age: 25,
    surname: "Thapa"
}

for (let item of Object.keys(person)) {
    // console.log(item)
}

for (let [k,v] of Object.entries(person)){
    console.log(k,v)
}
