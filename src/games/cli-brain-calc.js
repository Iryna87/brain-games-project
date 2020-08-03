// brain-calc.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const findCalc = (firstNumber, secondNumber, sign) => {
  let correctAnswer = 0;
  switch (sign) {
    case '+':
      correctAnswer = (firstNumber + secondNumber);
      break;
    case '-':
      correctAnswer = (firstNumber - secondNumber);
      break;
    case '*':
      correctAnswer = (firstNumber * secondNumber);
      break;
    default:
      break;
  }
  return correctAnswer;
};

const build = () => {
  const firstNumber = findRundomNumber(1, 100);
  const secondNumber = findRundomNumber(1, 100);
  const signChoise = ['*', '-', '+'];
  const signNumber = findRundomNumber(0, signChoise.length);
  const sign = signChoise[signNumber];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  return [String(findCalc(firstNumber, secondNumber, sign)), question];
};

const task = 'What is the result of the expression?';

const playBrainCalc = () => {
  runEngine(build, task);
};
export default playBrainCalc;
