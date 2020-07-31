// brain-calc.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const build = () => {
  const firstNumber = findRundomNumber(1, 100);
  const secondNumber = findRundomNumber(1, 100);
  const signChoise = ['*', '-', '+'];
  const signNumber = findRundomNumber(0, signChoise.length);
  const sign = signChoise[signNumber];
  let question = '';
  question = `${firstNumber} ${sign} ${secondNumber}`;
  let correctAnswer = 0;
  const expression = question.split(' '); // разбиваем выражение на элементы массива
  switch (expression[1]) {
    case '+':
      correctAnswer = (+expression[0] + +expression[2]);
      break;
    case '-':
      correctAnswer = (+expression[0] - +expression[2]);
      break;
    case '*':
      correctAnswer = (+expression[0] * +expression[2]);
      break;
    default:
      break;
  }
  const result = [String(correctAnswer), question];
  return result;
};

const task = 'What is the result of the expression?';

const playBrainCalc = () => {
  runEngine(build, task);
};
export default playBrainCalc;
