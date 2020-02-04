const persistence2 = num => {
    let result = num
    let count = 0
    while (result.toString().length !== 1) {
        let digits = result.toString().split("")
        result = 1
        count++
        for (let i in digits) {
            result *= parseInt(digits[i])
        }
    }

    return count
}

// Best solution
const persistence = num => {
    let count = 0
    num = num.toString()
    
    while (num.length > 1) {
      count++
      num = num.split("").map(Number).reduce((a, b) => a * b).toString()
    }
    
    return count
}


console.log(persistence(999))