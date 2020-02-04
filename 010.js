const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

const toCamelCase = str => {
    let chunks = str.split(/-|_/g) 
    let text = ""

    for (let i = 0; i < chunks.length; i++) {
        if (chunks[i].charAt(0) === chunks[0].charAt(0).toLowerCase()) text += chunks[i]
        else text += capitalize(chunks[i])
    }

    return text
}

console.log(toCamelCase('the-Stealth-Warrior'))