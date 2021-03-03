const filter = (fn, arr) => {
    return arr.filter(fn);
}

function isEven(num) {
    return num % 2 === 0;
}

console.log(filter(isEven, [1,2,3,4,5,6,7,8,9]));
