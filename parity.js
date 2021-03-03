const isOdd = (num) => {
    return num % 2 === 1;
}

const isEven = (num) => {
    return ! isOdd(num);
}


console.log(isOdd(2));
console.log(isOdd(3));

console.log(isEven(2));
console.log(isEven(3));
