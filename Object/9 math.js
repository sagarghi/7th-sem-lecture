//Math

const random = Math.random()
console.log(random)

const num = 1.2

console.log(Math.ceil(num))

//round
console.log(Math.round(random))



//string



const str1 = 'This  a string'
console.log(typeof str1)

//string object
// const str = new String('This is a test')
// console.log(typeof str)




console.log(str1.length)

console.log(str1.includes('is'))
//search
const query = 'ram'
const str = {
    name: `Ram`
}

console.log(str.name.toLowerCase().startsWith(query.toLowerCase()))
//endWith
//indexOf

//remove white space
// trim()
//leftTrim()
//rightTrim()
console.log(query)
console.log(query.trim())


const str5 = "Hello, from another world"
//replace
console.log(str5.replace(',', ''))

//split
const url = 'https://meet.google.com/usj-jfvh-ewv?pli=1&authuser=2'

console.log(str5.split(',').join(''))

// ``

console.log("My search query is", query,"")
console.log(`My search query is ${query}.Ok there is further more query ${url}`)

console.log(query.toLowerCase(), str.name.toLowerCase())


//Date

const currDate=new Date()
console.log(currDate)

console.log(currDate.getDate())
