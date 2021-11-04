console.log("Задание 6.4. – Форматирование строки");

function format(str) {
    return str
        .split('')
        .reduce((str, letter, index) => str.length ? str + '-' + letter.toUpperCase() + letter.toLowerCase().repeat(index) : letter.toUpperCase(), '');
};

console.log(format('abcd'));
console.log(format('RqaEzty'));
console.log(format('cwAt'));