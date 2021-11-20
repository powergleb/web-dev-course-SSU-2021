function calculate(input) {
    const getOperator = operator => numberRight => numberLeft => operator(numberLeft, numberRight);
    const getNumber = value => operator => operator ? operator(value) : value;
    
    const zero = getNumber(0);
    const one = getNumber(1);
    const two = getNumber(2);
    const three = getNumber(3);
    const four = getNumber(4);
    const five = getNumber(5);
    const six = getNumber(6);
    const seven = getNumber(7);
    const eight = getNumber(8);
    const nine = getNumber(9);
    const plus = getOperator((a, b) => a + b);
    const minus = getOperator((a, b) => a - b);
    const times = getOperator((a, b) => a * b);
    const dividedBy = getOperator((a, b) => Number.isFinite(a / b) ? ((a / b) | 0) : (a / b));

    return eval(input);
}

console.log("Function calculator: ")
console.log(calculate("seven(times(five()))"))
console.log(calculate("four(plus(nine()))"))
console.log(calculate("eight(minus(three()))"))
console.log(calculate("eight(dividedBy(three()))"))
console.log(calculate("three(times(three(times(three()))))"))
console.log(calculate("two(plus(two(times(two(minus(one()))))))"))
console.log(calculate("zero(plus(one(dividedBy(one()))))"))
console.log(calculate("one(dividedBy(zero()))"))