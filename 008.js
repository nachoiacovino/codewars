// const list = names => {
//     let text = ""
//     let arrayNames = []
//     for (let i in names) {
//         arrayNames.push(names[i].name)
//     }

//     for (let j in arrayNames) {
//         if (j == 0) text += `${arrayNames[j]}`
//         else if (j == arrayNames.length - 1) text += ` & ${arrayNames[j]}`
//         else text += `, ${arrayNames[j]}`
//     }
    
//     return text
// }

// Version without for in loops
const list = names => {
    let text = ""
    let arrayNames = []
    for (let i = 0; i < names.length; i++) {
        arrayNames.push(names[i].name)
    }

    for (let j = 0; j < arrayNames.length; j++) {
        if (j == 0) text += `${arrayNames[j]}`
        else if (j == arrayNames.length - 1) text += ` & ${arrayNames[j]}`
        else text += `, ${arrayNames[j]}`
    }
    
    return text
}

// Best solution 
const list2 = names => names.reduce((prev, current, idx, array) => {
    if (idx === 0) return current.name
    else if (idx === array.length - 1) return `${prev} & ${current.name}`
    else return `${prev}, ${current.name}`
}, "")

// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))
// console.log(list([ {name: 'Bart'} ]))
console.log(list2([{name: 'Maggie'},{name: 'Lisa'},{name: 'Marge'},{name: 'Homer'},{name: 'Marge'},{name: 'Bart'},{name: 'Barney'}]))