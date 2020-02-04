const findOutlier = integers => {
    const oddOrEven = {}
    let countEven = 0
    let countOdd = 0

    for (let i in integers) {
        if (integers[i] % 2 === 0) {
            oddOrEven.even = integers[i]
            countEven++
        }
        else {
            oddOrEven.odd = integers[i]
            countOdd++
        }
    }

    if (countEven > countOdd) return oddOrEven.odd
    else return oddOrEven.even
}

console.log(findOutlier([2,6,8,10,3]))

// Best solution
const findOutlier2 = int => {
    let even = int.filter(a => a % 2 == 0)
    let odd = int.filter(a=> a % 2 !== 0)
    return even.length == 1 ? even[0] : odd[0]
}