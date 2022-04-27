const perfectSquare = (num) => {
    if (Number.isInteger(Math.sqrt(num))) {
       return (Math.sqrt(num) + 1)**2
    } else {
        return -1
    }
}

console.log(perfectSquare(9))
console.log(perfectSquare(8))
console.log(perfectSquare(16))