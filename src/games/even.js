import runGame from '../index.js';
import getRundomNumber from '../utils.js';

const isNumberEven = (question) => question % 2 === 0;

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
