const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('To which number would you like to fizz and/or buzz? ', (max) => {
    for (let i=1; i<Number(max)+1; i++) {
        let words = getWords(i);

        if (words.includes('Bong')) {
            words = words.filter(word => word === 'Bong' || word === 'Fezz');
        }

        if (i % 17 === 0) {
            words.reverse();
        }

        if (words.length > 0) {
            console.log(words.join(''));
        } else {
            console.log(i);
        }
    }
    rl.close();
});

function getWords(number) {
    let words = [];

    if (number % 3 === 0) {
        words.push('Fizz');
    }
    if (number % 13 === 0) {
        words.push('Fezz');
    }
    if (number % 5 === 0) {
        words.push('Buzz');
    }
    if (number % 7 === 0) {
        words.push('Bang');
    }
    if (number % 11 === 0) {
        words.push('Bong');
    }

    return words;
}
