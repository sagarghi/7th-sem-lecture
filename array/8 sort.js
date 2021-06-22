const num = [3, 2, 1, 7, 5]

num.sort()
// console.log(num)

const obj = [
    { id: 4, name: 'Ram' },
    { id: 1, name: 'Hari' },
    { id: 3, name: 'Ashwin' },
    { id: 2, name: 'Alex' }
]
TODO
const sortedValue = obj.sort((a, b) => a.id - b.id)
console.log(sortedValue)