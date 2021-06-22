const person = {
    age: 12,
    name: "Test",
    height: 3,
    weight: 12,
    language: ['nepali', 'english'],
    school: "Test school"
    //100
}

const anotherPerson = {}

for (let key in person) {
    anotherPerson[key] = person[key]
}
console.log(anotherPerson)

const forgotten = { isChild: true }

const anotherPerson2 = Object.assign({}, person)
console.log(anotherPerson2)


console.log({ ...person })