// give3.js

import readlineSync from 'readline-sync';



const greetings = () => console.log('Welcome to the Brain Games!');
  

const functionA = () => {
    const randomNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
    };

    const name = readlineSync.question('May I have your name? ');
    
    const str = `Hello, ${name}!`;

    console.log(str);

    console.log ('What is the result of the expression?');

    const functionB = () => {
        let a = '';

        const x = ['*','-','+'];

        let rundomNumber1 = randomNumberRange(1, 100);

        let rundomNumber2 = randomNumberRange(1, 100);

        let expressionSign= randomNumberRange(0, x.length);

        let expressionSignRundom = x[expressionSign];

        a = `${rundomNumber1} ${expressionSignRundom} ${rundomNumber2}`;

        return a;
        
    };
    
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




export { greetings, functionA };