//factory function

function area(length, height) {
    const obj = {
        length: length,
        height: height,
        showArea: function () {
            return `The area is ${length * height}`
        }

    }
    return obj
}

console.log(area(12, 14).showArea())
console.log(area(1, 2).showArea())