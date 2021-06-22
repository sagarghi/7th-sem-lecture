//*Add
const emptyArr = [5]

emptyArr.push(1, 2)

console.log(emptyArr)

emptyArr.unshift(0)

console.log(emptyArr)

const output = emptyArr.splice(3, 0, 'a', 'b', 'c')
console.log(output)
console.log(emptyArr)