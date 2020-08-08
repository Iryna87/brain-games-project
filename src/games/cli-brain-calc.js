// brain-calc.js

import getAnswer from '../index.js';
import getRundomNumber from '../utils.js';

const getCalcResult = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return (firstNumber + secondNumber);
    case '-':
      return (firstNumber - secondNumber);
    case '*':
      return (firstNumber * secondNumber);
    default:
      return '';
  }
};

const buildGame = () => {
  const firstNumber = getRundomNumber(1, 100);
  const secondNumber = getRundomNumber(1, 100);
  const signs = ['*', '-', '+'];
  const signIndex = getRundomNumber(0, signs.length);
  const sign = signs[signIndex];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const result = getCalcResult(firstNumber, secondNumber, sign);
  return [String(result), question];
};

const text = 'What is the result of the expression?';

const playBrainCalc = () => {
  getAnswer(buildGame, text);
};
export default playBrainCalc;
