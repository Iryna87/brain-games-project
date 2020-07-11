// give3.js

import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const nameF  = () => {
    
    const str = `Hello, ${name}!`;

    console.log(str);

};

export const functionB = () => {
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

    return a;
    
};


export const functionA = () => {
    
    let aaa = functionB();

    let question = `Question: ${aaa}`;

    console.log(question);

    const answer = readlineSync.question('Yor answer: ');
    
        if (Number(answer) !== eval(aaa)) {
            const echo = `'${answer}' is wrong answer ;(. Correct answer was '${eval(aaa)}'.\nLet\'s try again, ${name}!`;
            console.log (echo);
    
        } else {
            console.log('Correct!');

            let aaa = functionB();

            let question = `Question: ${aaa}`;

            console.log(question);

            const answer1 = readlineSync.question('Yor answer: ');
        
                if (Number(answer1) !== eval(aaa)) {
                    const echo = `'${answer1}' is wrong answer ;(. Correct answer was '${eval(aaa)}'.\nLet\'s try again, ${name}!`;
                    console.log (echo);
    
                } else {
                    console.log('Correct!');

                    let aaa = functionB();

                    let question = `Question: ${aaa}`;

                    console.log(question);

                    const answer2 = readlineSync.question('Yor answer: ');
    
                        if (Number(answer2) !== eval(aaa)) {
                            const echo = `'${answer2}' is wrong answer ;(. Correct answer was '${eval(aaa)}'.\nLet\'s try again, ${name}!`;
                            console.log (echo);
                        } else {
                            console.log('Correct!');

                            const end = `Congratulations, ${name}!`;
                            
                            console.log(end);
                        }
                }
    
         }

};


export const functionD = (min, max) => {
    const randomNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
    };
    let a = '';

    let rundomNumber1 = randomNumberRange(1, 100);

    let rundomNumber2 = randomNumberRange(1, 100);

    a = `${rundomNumber1} ${rundomNumber2}`;

    let question = `Question: ${a}`;

    console.log(question);

    let b = [];
    
    let bais = b.push(rundomNumber1, rundomNumber2);

    let result = '';
    
    for (let i = 1; i <= 200; i += 1) {
        if (b[0] % i === 0 && b[1] % i === 0) {
        result = i;
        //console.log(result);
        }
    }
    return Number(result); 

};
 

export const functionC = () => {

    let res = functionD();

    const answer = readlineSync.question('Yor answer: ');
    
        if (Number(answer) !== res) {
            const echo = `'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet\'s try again, ${name}!`;
            console.log (echo);
    
        } else {
            console.log('Correct!');

            let res = functionD();

            const answer1 = readlineSync.question('Yor answer: ');
        
                if (Number(answer1) !== res) {
                    const echo = `'${answer1}' is wrong answer ;(. Correct answer was '${res}'.\nLet\'s try again, ${name}!`;
                    console.log (echo);
    
                } else {
                    console.log('Correct!');

                    let res = functionD();

                    const answer2 = readlineSync.question('Yor answer: ');
    
                        if (Number(answer2) !== res) {
                            const echo = `'${answer2}' is wrong answer ;(. Correct answer was '${res}'.\nLet\'s try again, ${name}!`;
                            console.log (echo);
                        } else {
                            console.log('Correct!');

                            const end = `Congratulations, ${name}!`;
                            
                            console.log(end);
                        }
                }
    
         }

};
