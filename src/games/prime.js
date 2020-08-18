import runGame from '../index.js';
import getRundomNumber from '../utils.js';

const isNumberPrime = (question) => {
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

const buildGame = () => {
  const question = getRundomNumber(1, 100);
  const result = isNumberPrime(question) ? 'yes' : 'no';
  return [result, question];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => {
  runGame(buildGame, description);
};
export default playBrainPrime;
