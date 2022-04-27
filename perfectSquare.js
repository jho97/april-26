// const perfectSquare = (num) => {
//     let root = Math.sqrt(num)
//     if (root % 1 !== 0) {
//         return -1
//     }
//     return Math.pow(root + 1, 2)
// }

const perfectSquare = (num) => {
    if (Number.isInteger(Math.sqrt(num))) {
       return (Math.sqrt(num) + 1) ** 2
    }
    else {
        return -1
    }
}
console.log(perfectSquare(9))