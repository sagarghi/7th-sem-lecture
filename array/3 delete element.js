//removing the element

const arr=['a','b','c','d','e','f']

console.log(arr.pop())
console.log(arr)


console.log(arr.shift())
console.log(arr)

//splice
const index=arr.indexOf('c')

const removedElement =arr.splice(index,2)
console.log(removedElement)
console.log(arr)
