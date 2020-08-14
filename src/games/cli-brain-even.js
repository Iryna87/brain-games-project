// brain-even.js

import runGame from '../index.js';
import getRundomNumber from '../utils.js';

const isNumberEven = (question) => {
  if (question % 2 === 0) {
    return true;
  }
  return false;
};

const buildGame = () => {
  const question = getRundomNumber(1, 100);
  const result = isNumberEven(question) ? 'yes' : 'no';
  return [result, question];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => {
  runGame(buildGame, description);
};
export default playBrainEven;
