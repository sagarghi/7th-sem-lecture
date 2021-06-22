// const arr = []

// TODO
//forEach
//map
//reduce
//find
//filter

const arr10 = ['a', 'b', 'c', 'd']
// //find

// for(let i=0)

const foundResult = arr10.find((element) => element === 'b')
console.log(foundResult)

const arr2 = [
    { id: 4, name: 'Ram' },
    { id: 1, name: 'Hari' },
    { id: 3, name: 'Ashwin' },
    { id: 2, name: 'Alex' }
]
console.log('Hello')
const result3 = arr2.find(function (element) {
    return element.id === 1
})


console.log(result3)
const result = arr2.find(element => element.id === 7)
console.log(result?.name)

// find
// const arr10 = ['a', 'b', 'c']

const arr = [1, 2, 3, 4, 5, 6]

//map
// f(x)=>2x
const arr2 = []
for (let item of arr) {
    arr2.push(item * 2)
}
console.log(arr2)

const result = arr.map(item => item * 2)
console.log(result)

//forEach
const arr3 = []
const result2 = arr.forEach(item => arr3.push(item * 2))
console.log(arr3)
console.log(result2)


//filter
const filteredArr = arr.filter(item => typeof item !== 'number')
console.log(filteredArr)


//reduce
const naturalNumber = [1, 2, 3,]

//To do sum of natural number
const reducedValue = naturalNumber.reduce((acc, item) => acc + item, 0)
console.log(reducedValue)

const output = naturalNumber.reduce((acc = [], curr) => {
    acc.push(curr * 2)
    return acc
}, [])
console.log(output)


const person = [
    { name: 'Hari', maxAge: 20, minAge: 10 },
    { name: 'Ram', maxAge: 30, minAge: 22 },
    { name: 'Ashwin', maxAge: 20, minAge: 5 },

]
//average age  
const output1 = person.reduce((acc = [], item) => {
    acc.push({ name: item.name, avgAge: (item.maxAge + item.minAge) / 2 })
    return acc
}, [])
console.log(output1)
// const
