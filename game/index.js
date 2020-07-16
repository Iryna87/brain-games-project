// give_index.js

import readlineSync from 'readline-sync';
import * as conditions from './cli_brain_prime.js';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const greetings  = () => {
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
    let question = `Question: ${a}`;
    console.log(question);
    return a;
};


export const functionA = () => {
    let i = 0;
  
    const func = () => {
  
      let aaa = functionB();
      const answer = readlineSync.question('Your answer: ');
        if (Number(answer) !== eval(aaa)) {
          const echo = `'${answer}' is wrong answer ;(. Correct answer was '${eval(aaa)}'.\nLet\'s try again, ${name}!`;
          console.log (echo);
        } else {
          if (i === 2 && Number(answer) === eval(aaa)) {
          console.log('Correct!');
          const end = `Congratulations, ${name}!`;
          console.log(end);
        } else {
          i += 1;
          //console.log(i);
          console.log('Correct!');
          func();
        };
      };
    };
    func();    
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
    let i = 0;
  
    const func = () => {
  
      let aaa = functionD();
      const answer = readlineSync.question('Your answer: ');
        if (Number(answer) !== aaa) {
          const echo = `'${answer}' is wrong answer ;(. Correct answer was '${aaa}'.\nLet\'s try again, ${name}!`;
          console.log (echo);
        } else {
          if (i === 2 && Number(answer) === aaa) {
          console.log('Correct!');
          const end = `Congratulations, ${name}!`;
          console.log(end);
        } else {
          i += 1;
          //console.log(i);
          console.log('Correct!');
          func();
        };
      };
    };
    func();    
  };



export const functionF = (min, max) => {
    const randomNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
    };

    let a = randomNumberRange(1, 11);
    //console.log(a);
    let b = randomNumberRange(1, 90);
    let c = randomNumberRange(0, 10);

    let result = [b + a];
    for (let i = 1; i < 10; i += 1) {
        result[i] = result[i - 1] + a;
      };

    let res = result.splice(c, 1, '..');
    let res1 = String(result);
    let res2 = res1.replace(/[,]/g, ' ');
    //console.log(res2);
  
    let question = `Question: ${res2}`;
    console.log(question);
    let ccc = 0;

    //console.log(result);
    //console.log(c);

    if (c === 0) {
        ccc = result[c + 1] - a; 
    } if (c === 9) {
        ccc = result[c - 1] + a;
    } else {
        ccc = result[c + 1] - a;
    }
    //console.log(ccc);
    return ccc;
};
 

export const functionE = () => {
    let i = 0;
  
    const func = () => {
  
      let aaa = functionF();
      const answer = readlineSync.question('Your answer: ');
        if (Number(answer) !== aaa) {
          const echo = `'${answer}' is wrong answer ;(. Correct answer was '${aaa}'.\nLet\'s try again, ${name}!`;
          console.log (echo);
        } else {
          if (i === 2 && Number(answer) === aaa) {
          console.log('Correct!');
          const end = `Congratulations, ${name}!`;
          console.log(end);
        } else {
          i += 1;
          //console.log(i);
          console.log('Correct!');
          func();
        };
      };
    };
    func();    
  };



export const engineBrainPrime = () => {
    let i = 0;
  
    const func = () => {
  
      let aaa = conditions.conditionBrainPrime();
      const answer = readlineSync.question('Your answer: ');
        if (answer !== aaa) {
          const echo = `'${answer}' is wrong answer ;(. Correct answer was '${aaa}'.\nLet\'s try again, ${name}!`;
          console.log (echo);
        } else {
          if (i === 2 && answer === aaa) {
          console.log('Correct!');
          const end = `Congratulations, ${name}!`;
          console.log(end);
        } else {
          i += 1;
          //console.log(i);
          console.log('Correct!');
          func();
        };
      };
    };
    func();    
  };




export const engine = () => {

    let answer = readlineSync.question('Your answer: ');
    if (answer !== result) {
        const echo = `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet\'s try again, ${name}!`;
        console.log (echo);
    
    } else {
        console.log('Correct!');
        engine();
    };
};

