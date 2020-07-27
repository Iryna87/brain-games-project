// give1.js

import * as func from '../index.js';
import randomNumberRange from '../utils.js';

export const conditionBrainEven = () => {
  const rundomNumber = randomNumberRange(1, 100);
  const questionToScreen = `Question: ${rundomNumber}`;
  console.log(questionToScreen);
  let result = '';
  if (rundomNumber % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};
export const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

export const brainEven = () => {
  func.greetings();
  console.log(gameQuestion);
  func.engine(conditionBrainEven);
};
