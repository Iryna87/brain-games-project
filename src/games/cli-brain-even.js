// brain-even.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const build = () => {
  const numberIfEven = findRundomNumber(1, 100);
  const question = numberIfEven;
  let correctAnswer = '';
  if (numberIfEven % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const result = [correctAnswer, question];
  return result;
};
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => {
  runEngine(build, task);
};
export default playBrainEven;
