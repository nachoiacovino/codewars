const solution = str => {
    let chunks = []
    for (let i = 0; i < str.length; i += 2) {
        let substr = str.substring(i, i + 2)
        if (substr.length == 1) chunks.push(`${substr}_`)
        else chunks.push(substr)
    }

    return chunks
}

console.log(solution('abcdefg'))