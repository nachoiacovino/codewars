const SeriesSum = n => {
    let result = 0
    for (let i = 0; i < n; i++) {
        if (i === 0) result++
        else result += 1 / (i * 3 + 1)
    }

    return result.toFixed(2).toString()
}

console.log(SeriesSum(4))
