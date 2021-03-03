

const add = (a, b) => {
    return (a + b);
}

const sub = (a, b) => {
    return (a - b);
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

const calc = (operator, a, b) => {
    switch (operator) {
    case '+':
	return add(a, b);
	break;
    case '-':
	return sub(a, b);
	break;
    case '*':
	return mul(a, b);
	break;
    case '/':
	return div(a, b);
	break;
    default:
	console.log('Veuillez rentrer un opérateur correct');
    }
}

console.log(calc('+', 3, 7));
console.log(calc('-', 12, 8));
console.log(calc('*', 4, 6));
console.log(calc('/', 12, 3));
