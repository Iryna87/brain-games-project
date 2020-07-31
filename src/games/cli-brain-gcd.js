// brain-gcd.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const build = () => {
  const firstNumber = findRundomNumber(1, 100);
  const secondNumber = findRundomNumber(1, 100);
  let question = '';
  question = `${firstNumber} ${secondNumber}`;
  let correctAnswer = '';
  const biggestDivisorBase = [firstNumber, secondNumber];
  for (let i = 1; i <= 200; i += 1) {
    if (biggestDivisorBase[0] % i === 0 && biggestDivisorBase[1] % i === 0) {
      correctAnswer = i;
    }
  }
  const result = [String(correctAnswer), question];
  return result;
};
const task = 'Find the greatest common divisor of given numbers.';

const playBrainGcd = () => {
  runEngine(build, task);
};
export default playBrainGcd;
