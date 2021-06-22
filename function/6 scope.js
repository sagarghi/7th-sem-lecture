//types of scope
//lexical scope
//dynamic scope

//lexical
//compile time scope

function outer() {
    var num = 1
    function inner() {
        console.log(`The number is ${num}`)
    }
    inner()
}
outer()