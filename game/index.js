// give_index.js

import readlineSync from 'readline-sync';
import * as conditions from './cli_brain_prime.js';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const greetings = () => {
  const str = `Hello, ${name}!`;
  console.log(str);
};

export const functionB = () => {
  const randomNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let a = '';
  const x = ['*', '-', '+'];
  const rundomNumber1 = randomNumberRange(1, 100);
  const rundomNumber2 = randomNumberRange(1, 100);
  const expressionSign= randomNumberRange(0, x.length);
  const expressionSignRundom = x[expressionSign];

  a = `${rundomNumber1} ${expressionSignRundom} ${rundomNumber2}`;
  const question = `Question: ${a}`;
  console.log(question);
  return a;
};

export const functionA = () => {
  let i = 0;
  const func = () => {
    const aaa = functionB();
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== eval(aaa)) {
      const echo = `'${answer}' is wrong answer ;(. Correct answer was '${eval(aaa)}'.\nLet\'s try again, ${name}!`;
      console.log(echo);
    } else {
      if (i === 2 && Number(answer) === eval(aaa)) {
        console.log('Correct!');
        const end = `Congratulations, ${name}!`;
        console.log(end);
      } else {
        i += 1;
        console.log('Correct!');
        func();
      };
    }
  };
  func();
};

export const functionD = (min, max) => {
  const randomNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  let a = '';
  const rundomNumber1 = randomNumberRange(1, 100);
  const rundomNumber2 = randomNumberRange(1, 100);
  a = `${rundomNumber1} ${rundomNumber2}`;
  const question = `Question: ${a}`;
  console.log(question);
  let b = [];
  let bais = b.push(rundomNumber1, rundomNumber2);
  let result = '';
  for (let i = 1; i <= 200; i += 1) {
    if (b[0] % i === 0 && b[1] % i === 0) {
      result = i;
    }
  }
  return Number(result);
};

export const functionC = () => {
  let i = 0;
  const func = () => {
    const aaa = functionD();
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== aaa) {
      const echo = `'${answer}' is wrong answer ;(. Correct answer was '${aaa}'.\nLet\'s try again, ${name}!`;
      console.log(echo);
    } else {
      if (i === 2 && Number(answer) === aaa) {
        console.log('Correct!');
        const end = `Congratulations, ${name}!`;
        console.log(end);
      } else {
        i += 1;
        console.log('Correct!');
        func();
      };
    }
  };
  func();
};

export const functionF = (min, max) => {
  const randomNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const a = randomNumberRange(1, 11);
  const b = randomNumberRange(1, 90);
  const c = randomNumberRange(0, 10);
  const result = [b + a];
  for (let i = 1; i < 10; i += 1) {
    result[i] = result[i - 1] + a;
  }
  const res = result.splice(c, 1, '..');
  const res1 = String(result);
  const res2 = res1.replace(/[,]/g, ' ');
  const question = `Question: ${res2}`;
  console.log(question);
  let ccc = 0;
  if (c === 0) {
    ccc = result[c + 1] - a; 
  } if (c === 9) {
    ccc = result[c - 1] + a;
  } else {
    ccc = result[c + 1] - a;
  }
  return ccc;
};

export const functionE = () => {
  let i = 0;
  const func = () => {
    const aaa = functionF();
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== aaa) {
      const echo = `'${answer}' is wrong answer ;(. Correct answer was '${aaa}'.\nLet\'s try again, ${name}!`;
      console.log(echo);
    } else {
      if (i === 2 && Number(answer) === aaa) {
        console.log('Correct!');
        const end = `Congratulations, ${name}!`;
        console.log(end);
      } else {
        i += 1;
        console.log('Correct!');
        func();
      };
    }
  };
  func();
};

export const engineBrainPrime = () => {
  let i = 0;
  const func = () => {
    const aaa = conditions.conditionBrainPrime();
    const answer = readlineSync.question('Your answer: ');
    if (answer !== aaa) {
      const echo = `'${answer}' is wrong answer ;(. Correct answer was '${aaa}'.\nLet\'s try again, ${name}!`;
      console.log(echo);
    } else {
      if (i === 2 && answer === aaa) {
        console.log('Correct!');
        const end = `Congratulations, ${name}!`;
        console.log(end);
      } else {
        i += 1;
        console.log('Correct!');
        func();
      };
    }
  };
  func();
};
