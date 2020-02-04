// const rgb = (r, g, b) => {
//     const rgbToHex = color => {
//         if (color > 255) color = 255
//         else if (color < 0) color = 0

//         let hex = Number(color).toString(16)
//         if (hex.length < 2) hex = `0${hex}`
//         return hex
//     }

//     return `${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`.toUpperCase()
// }


// Best solution
const rgbToHex = color => {
    if (color < 0) return "00"
    else if (color > 255) return "FF"
    return ("0"+(Number(color).toString(16))).slice(-2).toUpperCase()
}

const rgb = (r, g, b) => `${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`

console.log(rgb(300,255,255))