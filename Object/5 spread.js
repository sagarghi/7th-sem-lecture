const person = {
    age: 12,
    name: "Test",
    height: 3,
    weight: 12,
    language: ['nepali', 'english'],
    school: "Test school"
    //100
}

const { age, height, weight, name, ...rest } = person

console.log( rest)