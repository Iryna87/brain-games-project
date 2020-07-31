// brain-prime.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const build = () => {
  const numberIfPrime = findRundomNumber(1, 100);
  const question = numberIfPrime;
  let correctAnswer = '';
  let divisorsCount = 0;
  for (let i = 1; i <= numberIfPrime; i += 1) {
    if (numberIfPrime % i === 0) {
      divisorsCount += 1;
    }
  }
  if (divisorsCount < 3) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const result = [correctAnswer, question];
  return result;
};
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => {
  runEngine(build, task);
};
export default playBrainPrime;
