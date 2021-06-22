let arr = ['a', 'b', 'c', 'd', 'e', 'f']
let arr1 = ['g', 'h']


// console.log(...arr)
//combine
const combined = [...arr, 'Hari', ...arr1, 'Ram']
console.log(combined, combined.indexOf('Hari'))


//copy
const copiedArr = [...arr]
console.log(copiedArr)

//destructuring

const [firstElement, secElement, ...rest] = arr
console.log(firstElement, secElement, rest)