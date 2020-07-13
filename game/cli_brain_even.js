// give1.js

import readlineSync from 'readline-sync';

export const brainEven = () => {

    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');

    const str = `Hello, ${name}!`;

    console.log(str);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    console.log('Question: 15');

    const name1 = readlineSync.question('Your answer: ');

    if (name1 !== 'no') {
    const str1 = `${name1} is wrong answer ;(. Correct answer was "no". Let\'s try again, ${name}!`;
    console.log(str1);
    } else {
        console.log('Correct!');
        console.log('Question: 6');
        const name2 = readlineSync.question('Your answer: ');
    if (name2 !== 'yes') {
        const str3 = `${name2} is wrong answer ;(. Correct answer was "yes". Let\'s try again, ${name}!`;
        console.log(str3);
    } else {
        console.log('Correct!');
        console.log('Question: 7');
        const name3 = readlineSync.question('Your answer: ');
            if (name3 !== 'no') {
                const str4 = `${name3} is wrong answer ;(. Correct answer was "no". Let\'s try again, ${name}!`;
                console.log(str4);
            } else {
                const str5 = `Congratulations, ${name}!`;
                console.log('Correct!');
                console.log(str5);
            }
        }
    }
};