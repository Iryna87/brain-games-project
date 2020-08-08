// brain-even.js

import getAnswer from '../index.js';
import getRundomNumber from '../utils.js';

const isNumberEven = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const buildGame = () => {
  const question = getRundomNumber(1, 100);
  return [isNumberEven(question), question];
};

const text = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => {
  getAnswer(buildGame, text);
};
export default playBrainEven;
