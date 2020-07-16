// give_index.js

import readlineSync from 'readline-sync';
import * as conditionBrainPrime from './cli_brain_prime.js';
import * as conditionBrainProgression from './cli_brain_progression.js';
import * as conditionBrainGcd from './cli_brain_gcd.js';
import * as conditionBrainCalc from './cli_brain_calc.js';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const greetings = () => {
  const str = `Hello, ${name}!`;
  console.log(str);
};

export const engineBrainCalc = () => {
  let i = 0;
  const isRight = () => {
    const resultFromCondition = conditionBrainCalc.conditionBrainCalc();
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== eval(resultFromCondition)) {
      const echo = `'${answer}' is wrong answer ;(. Correct answer was '${eval(resultFromCondition)}'.\nLet's try again, ${name}!`;
      console.log(echo);
    } else if (i === 2 && Number(answer) === eval(resultFromCondition)) {
      console.log('Correct!');
      const congratulations = `Congratulations, ${name}!`;
      console.log(congratulations);
    } else {
      i += 1;
      console.log('Correct!');
      isRight();
    }
  };
  isRight();
};

export const engineBrainGcd = () => {
  let i = 0;
  const isRight = () => {
    const resultFromCondition = conditionBrainGcd.conditionBrainGcd();
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== resultFromCondition) {
      const echo = `'${answer}' is wrong answer ;(. Correct answer was '${resultFromCondition}'.\nLet's try again, ${name}!`;
      console.log(echo);
    } else if (i === 2 && Number(answer) === resultFromCondition) {
      console.log('Correct!');
      const congratulations = `Congratulations, ${name}!`;
      console.log(congratulations);
    } else {
      i += 1;
      console.log('Correct!');
      isRight();
    }
  };
  isRight();
};

export const engineBrainProgression = () => {
  let i = 0;
  const isRight = () => {
    const resultFromCondition = conditionBrainProgression.conditionBrainProgression();
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== resultFromCondition) {
      const echo = `'${answer}' is wrong answer ;(. Correct answer was '${resultFromCondition}'.\nLet's try again, ${name}!`;
      console.log(echo);
    } else if (i === 2 && Number(answer) === resultFromCondition) {
      console.log('Correct!');
      const congratulations = `Congratulations, ${name}!`;
      console.log(congratulations);
    } else {
      i += 1;
      console.log('Correct!');
      isRight();
    }
  };
  isRight();
};

export const engineBrainPrime = () => {
  let i = 0;
  const isRight = () => {
    const resultFromCondition = conditionBrainPrime.conditionBrainPrime();
    const answer = readlineSync.question('Your answer: ');
    if (answer !== resultFromCondition) {
      const echo = `'${answer}' is wrong answer ;(. Correct answer was '${resultFromCondition}'.\nLet's try again, ${name}!`;
      console.log(echo);
    } else if (i === 2 && answer === resultFromCondition) {
      console.log('Correct!');
      const congratulations = `Congratulations, ${name}!`;
      console.log(congratulations);
    } else {
      i += 1;
      console.log('Correct!');
      isRight();
    }
  };
  isRight();
};
