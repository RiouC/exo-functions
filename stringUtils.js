const reverseStr = (str) => {
    return str.split('').reverse().join('');
}

const isPalindrome = (str) => {
    return str === reverseStr(str);
}

// console.log(reverseStr('Hello!'));

// console.log(isPalindrome('Hello!'));
// console.log(isPalindrome('radar'));
// console.log(isPalindrome('elle'));

