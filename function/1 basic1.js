function area() {
    return "Hello I'm area function"
}
console.log(area())

function greet(name) {
    return `Hello ${name}.Welcome to our home`
}

console.log(greet("Sagar"))


//best practice
function testFunc(arg) {
    const { name, age } = arg
    return `My name is ${name}.My age is ${age}`
}

console.log(testFunc({ age: 12, name: 'Hari' }))
console.log(testFunc({ name: 'Hari', age: 12 }))


