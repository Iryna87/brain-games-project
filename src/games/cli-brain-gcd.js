// brain-gcd.js

import getAnswer from '../index.js';
import getRundomNumber from '../utils.js';

const getBiggestDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return getBiggestDivisor(secondNumber, firstNumber % secondNumber);
};

const buildGame = () => {
  const firstNumber = getRundomNumber(1, 100);
  const secondNumber = getRundomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const result = getBiggestDivisor(firstNumber, secondNumber);
  return [String(result), question];
};

const text = 'Find the greatest common divisor of given numbers.';

const playBrainGcd = () => {
  getAnswer(buildGame, text);
};
export default playBrainGcd;
