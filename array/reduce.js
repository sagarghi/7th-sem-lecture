const person = [
    { name: 'Hari', maxAge: 20, minAge: 10 },
    { name: 'Ram', maxAge: 30, minAge: 22 },
    { name: 'Ashwin', maxAge: 20, minAge: 5 },

]
//average age  
const output1 = person.reduce((acc, item) => {
    acc.push({ name: item.name, avgAge: (item.maxAge + item.minAge) / 2 })
    return acc
}, [])
// console.log(output1)


const person1 = [{ age: 12, height: 6 }, { age: 13, height: 5 }]

const output3 = person1.reduce((acc, item) => {
    acc.avgAge = (item.age + acc.avgAge) / 2
    acc.avgHeight = (item.height + acc.avgHeight) / 2

    console.log('====================================');
    console.log(acc);
    console.log('====================================');

    return acc
}, { avgAge: 0, avgHeight: 0 })
console.log(output3)

