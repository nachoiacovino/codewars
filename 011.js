const firstNonRepeatingLetter = s => {
    const letters = s.split("")
    let obj = {}
    for (let i = 0; i < letters.length; i++) {
        if (obj[letters[i].toLowerCase()] || obj[letters[i].toUpperCase()]) { 
            if (obj[letters[i].toLowerCase()]) obj[letters[i].toLowerCase()]++
            else obj[letters[i].toUpperCase()]++
        }
        else obj[letters[i]] = 1
    }

    for (let j = 0; j < Object.keys(obj).length; j++) {
        if ((Object.values(obj)[j]) == 1) return (Object.keys(obj)[j])
    }
    
    return ""
}

// Different solution
const firstNonRepeatingLetter2 = s => {
    let letters = s.toLowerCase()
    for (let i = 0; i < letters.length; i++) {
        if (letters.indexOf(letters[i]) === letters.lastIndexOf(letters[i])) return s[i]
    }
    return ""
}


// One line solution
const firstNonRepeatingLetter3 = s => s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1)] || ''

console.log(firstNonRepeatingLetter("sTreSS"))