//closure
//function that is combined with outer state or lexical environment

let a = 12
//lexical environment a
function impureFunc() {
    //lexical environment b
    let b = 12
    return a * b
}

console.log(impureFunc())

//lexical environment 1

function outer() {
    //lexical environment 2
    const name = 'Hari'
    const age = 12
    function inner() {
        //lexical environment 3
        return `Name:${name} age:${age}`
    }
    return inner
}
console.log(outer())

//disadvantage
// the variables are maintained in the heap even the outer function is called

function onPasswordEnter(password) {
    const maxPasswordTry = 0

    function onSubmit() {
        //
        //api call 

    }

}
//advantage
//data encapsulation
//currying

function add(num1) {
    return function (num2) {
        return num1 + num2
    }
}
console.log(add(1)(2))



//class
//es6

//OOP
// make code reusable 

//class is like a blueprint

//java access modifier
class Outer {
    constructor() {//encapsulate the data and functionality
        this.name = 'Hari';//data
        this.age = 12//data
    }
    inner() {//functionality
        return `Name:${name} age:${age}`
    }
}

const instance=new Outer()
