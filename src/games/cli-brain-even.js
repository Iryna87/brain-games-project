// brain-even.js

import runEngine from '../index.js';
import findRundomNumber from '../utils.js';

const findEven = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const build = () => {
  const question = findRundomNumber(1, 100);
  return [findEven(question), question];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => {
  runEngine(build, task);
};
export default playBrainEven;
