// brain-prime.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const findPrime = (question) => {
  if (question < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(question); i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const build = () => {
  const question = findRundomNumber(1, 100);
  const result = findPrime(question) ? 'yes' : 'no';
  return [result, question];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => {
  runEngine(build, task);
};
export default playBrainPrime;
