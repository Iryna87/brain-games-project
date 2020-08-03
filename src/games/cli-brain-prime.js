// brain-prime.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const findPrime = (question) => {
  let corectAnswer = 0;
  for (let i = 2; i <= question; i += 1) {
    if (question % i === 0) {
      corectAnswer += 1;
    }
  }
  if (corectAnswer > 2) return 'no';
  return 'yes';
};

const build = () => {
  const question = findRundomNumber(1, 100);
  return [findPrime(question), question];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => {
  runEngine(build, task);
};
export default playBrainPrime;
