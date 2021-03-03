const reverseStr = (str) => {
    let res = str.split('').reverse().join('');
    return res;
}

console.log(reverseStr('Hello!'));
