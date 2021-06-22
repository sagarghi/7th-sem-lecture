

//higher order function
//js supports first class function

// !We can pass
//function as a argument to another function
//return a new function
function area(func) {
    console.log(func)
    const result = func()
    console.log(result)
    return "world"
    // return () => 'World'
}
const result = area(() => 'Hello')
console.log(result)
// console.log(result())

//async