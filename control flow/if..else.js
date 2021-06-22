// if else

// if (condition) {
//block of code
// } else {
//block of code 
// }


const ageOfRam = 14
const ageOfHari = 14


if (ageOfRam < ageOfHari) {
    console.log("Ram is younger")
} else if (ageOfHari < ageOfHari) {
    console.log("Ram is younger")
} else {
    console.log('Both are at same age')
}

if (ageOfRam < ageOfHari) console.log("Ram is younger")
else if (ageOfHari < ageOfHari) console.log("Ram is younger")
else console.log('Both are at same age')

const whoIsYounger = ageOfRam < ageOfHari ? "Ram is younger" : "Hari is younger"

console.log(whoIsYounger)