//pure function
//impure function

function area(num1, num2) {
    return num1 * num2
}
console.log(area())//pure function
//if you give certain input to the function,the output should always be same



function area(num1, num2) {
    return num1 * num2
}
console.log(area(2, 2))
console.log(area(2, 2))

console.log(area(3, 2))
console.log(area(3, 2))

//impure function
const impureFunc = (x) => {
    const randomNumber = Math.random()
    console.log(randomNumber)
    return x * randomNumber
}

console.log(impureFunc(3343))
console.log(impureFunc(3343))
