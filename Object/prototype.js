function Area() {
    this.length = 12
    this.height = 12

}
Area.prototype.showArea = function () {
    return `The area of ... is ${this.length * this.height}`
}

console.log("I'm inside proto")
const area = new Area()
console.log(Object.getPrototypeOf(area).showArea())
