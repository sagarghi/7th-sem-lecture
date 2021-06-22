//constructor

//snake case  =>total_area
//camel case  =>totalArea
//Pascal notation=> TotalArea

function Area(length, height) {
    this.length = length
    this.height = height
    this.showArea = function () {
        return `The total area is ${this.length * this.height}`
    }
}
//new keyword 
//create object this ma bind gardinxa
const area = new Area(12, 12)
const area1 = new Area(13, 13)

// console.log(Area.name)

console.log(area.showArea())
console.log(area1.length)
