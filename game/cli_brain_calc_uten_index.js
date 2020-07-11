// give2.js

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

const str = `Hello, ${name}!`;

console.log(str);

console.log('What is the result of the expression?');

const randomNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
let a = '';

const x = ['*','-','+'];

let rundomNumber1 = randomNumberRange(1, 100);

let rundomNumber2 = randomNumberRange(1, 100);

let expressionSign= randomNumberRange(0, x.length);

let expressionSignRundom = x[expressionSign];

a = `${rundomNumber1} ${expressionSignRundom} ${rundomNumber2}`;

let question = `Question: ${a}`;

console.log(question);

const answer = readlineSync.question('Yor answer: ');

if (Number(answer) !== eval(a)) {
    const echo = `'${answer}' is wrong answer ;(. Correct answer was '${eval(a)}'`;
    console.log (echo);

} else {
    console.log('Correct!');
    
    let rundomNumber1 = randomNumberRange(1, 100);

    let rundomNumber2 = randomNumberRange(1, 100);
    
    let expressionSign= randomNumberRange(0, x.length);
    
    let expressionSignRundom = x[expressionSign];
    
    a = `${rundomNumber1} ${expressionSignRundom} ${rundomNumber2}`;
    
    let question = `Question: ${a}`;

    console.log(question);
    
    const answer = readlineSync.question('Yor answer: ');
    
    if (Number(answer) !== eval(a)) {
        const echo = `'${answer}' is wrong answer ;(. Correct answer was '${eval(a)}'`;
        console.log (echo);
        } else {
            console.log('Correct!');
    
        let rundomNumber1 = randomNumberRange(1, 100);

        let rundomNumber2 = randomNumberRange(1, 100);
    
        let expressionSign= randomNumberRange(0, x.length);
    
        let expressionSignRundom = x[expressionSign];
    
        a = `${rundomNumber1} ${expressionSignRundom} ${rundomNumber2}`;
    
        let question = `Question: ${a}`;

        console.log(question);
    
        const answer = readlineSync.question('Yor answer: ');
    
            if (Number(answer) !== eval(a)) {
                 const echo = `'${answer}' is wrong answer ;(. Correct answer was '${eval(a)}'`;
                 console.log (echo);
                } else {
                console.log('Correct!');
                const end = `Congratulations, ${name}!`;
                console.log(end);
            }
    }

}