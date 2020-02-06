const countSmileys = arr => {
    const eyes = [":", ";"]
    const nose = ["-", "~"]
    const mouth = [")", "D"]
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        const smiley = arr[i].split("")

        if (smiley.length === 3) {
            if (eyes.includes(smiley[0]) && nose.includes(smiley[1]) && mouth.includes(smiley[2])) count++
        } else if (smiley.length === 2) {
            if (eyes.includes(smiley[0]) && mouth.includes(smiley[1])) count++
        }
    }

    return count
}


// Regex solution
const countSmileys2 = arr => arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length

console.log(countSmileys([':)', ';(', ';}', ':-D']))