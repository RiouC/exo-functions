const forEach = (fn, arr) => {
    return arr.map(fn);
}

function doubler(num) {
    return num * 2;
}

// console.log(forEach(doubler, [1,2,3,4,5]));
