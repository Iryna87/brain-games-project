// brain-gcd.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const findBiggestDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findBiggestDivisor(secondNumber, firstNumber % secondNumber);
};

const build = () => {
  const firstNumber = findRundomNumber(1, 100);
  const secondNumber = findRundomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  return [String(findBiggestDivisor(firstNumber, secondNumber)), question];
};

const task = 'Find the greatest common divisor of given numbers.';

const playBrainGcd = () => {
  runEngine(build, task);
};
export default playBrainGcd;
