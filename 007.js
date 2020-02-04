const createPhoneNumber = n => {
    const s = n.join("")
    return `(${s.substring(0, 3)}) ${s.substring(3, 6)}-${s.substring(6, 10)}`
}    

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// Clever solution
const createPhoneNumber2 = n => {
    let format = "(xxx) xxx-xxxx"

    for (let i = 0; i < n.length; i++) {
        format = format.replace("x", n[i])
    }

    return format
}

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))