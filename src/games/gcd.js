import runGame from '../index.js';
import getRundomNumber from '../utils.js';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return getGreatestCommonDivisor(secondNumber, firstNumber % secondNumber);
};

const buildGame = () => {
  const firstNumber = getRundomNumber(1, 100);
  const secondNumber = getRundomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const result = getGreatestCommonDivisor(firstNumber, secondNumber);
  return [String(result), question];
};

const description = 'Find the greatest common divisor of given numbers.';

const playBrainGcd = () => {
  runGame(buildGame, description);
};
export default playBrainGcd;
