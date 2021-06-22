//this =>differs from current execution context
//In method this reference to the object itself
//function: this references to the global object (windows in browser and global in nodejs)

const person = {
    age: 12,
    walk: function () {
        console.log("What is this ?", this)
    },
    flip: () => console.log(this)
}

function testFunc() {
    console.log(this)
}
// testFunc()
console.log(person.flip())


//general use case
//constructor function

function Area(num) {
    this.num = num;
    this.total = function () {
        console.log("I' chained")
        return this
    }
}

const areaInstance = new Area(12)
console.log(areaInstance.total().total())


//bind call apply

//bind
function test() {
    console.log(this)
    return `Hello number `
}

const num = {
    num1=12
}

const result = test.bind(num)
console.log(result)


//bind
function test(num1,num2) {
    console.log(num1)
    return `Hello number ${this.num1} `
}

const num = {
    num1: 12
}

const result = test.bind(num)
console.log(result())

//bind lets you explicitly sets this in a function


//call 
//apply
const result1=test.call(num,...[1,2])
console.log(result1)