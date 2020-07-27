// give_prime.js

import * as func from '../index.js';
import randomNumberRange from '../utils.js';

export const conditionBrainPrime = () => {
  const randomNumber = randomNumberRange(1, 100);
  const questionToScreen = `Question: ${randomNumber}`;
  console.log(questionToScreen);
  let chechIfPrime = 0;
  for (let i = 1; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      chechIfPrime += 1;
    }
  }
  let result = '';
  if (chechIfPrime < 3) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};
export const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const brainPrime = () => {
  func.greetings();
  console.log(gameQuestion);
  func.engine(conditionBrainPrime);
};
