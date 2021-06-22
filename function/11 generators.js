function* generator() {
    yield 10;
    yield 11;
    yield 12;
}
// const result = generator()
// console.log(result.next())
// //logic
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())


// Result :1,2,9,16,25.....

function* createSquareNumber() {
    let num = 0
    while (true) {
        num++
        yield num * num

    }

}

const result = createSquareNumber()
console.log(result)
console.log(result.next().value)
console.log(result.throw(new Error('Error')))
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
