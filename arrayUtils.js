const biggest = (arr) => {
    return Math.max(...arr);
}

// console.log(biggest([1,2,3,4,5]));
// console.log(biggest([1,-3,7,4,5]));
// console.log(biggest([9,12,3,4,6]));


const sortAscend = (arr) => {
    return arr.sort((a, b) => a - b);
}

// console.log(sortAscend([1,2,3,4,5]));
// console.log(sortAscend([1,-3,7,4,5]));
// console.log(sortAscend([9,12,3,4,6]));

const makeUnique = (arr) => {
    return [...new Set(sortAscend(arr))];
}

// console.log(makeUnique([1,1, 2,1, 3,4,5]));
// console.log(makeUnique([1,-3,7,4,-3, 5]));
// console.log(makeUnique([9,12,3,4,12, 6, 9]));
