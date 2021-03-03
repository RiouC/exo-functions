
const pyramid = (nbBase, reverse, symbol) => {
    let str = ''
    if (!reverse) {
	for (let i = 1; i <= nbBase; i++) {
	    str += ' '.repeat(nbBase - i) + symbol.repeat(i * 2) + ' '.repeat(16 - i) + '\n';
	}
    } else {
	for (let i = 1; i <= nbBase; i++) {
	    str += symbol.repeat(i) + ' '.repeat(nbBase * 2 - i * 2) + symbol.repeat(i) + '\n';
	}
    }
    return str
}


let str1 = pyramid(5, true, '*')
console.log(str1 + "\n")


console.log(pyramid(10, false, '%') + "\n")

const nbBase = 15

let str2 = pyramid(nbBase, true, '@')
console.log(str2)
