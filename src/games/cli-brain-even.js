// give1.js

import * as func from '../index.js';

export const conditionBrainEven = () => {
  const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
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

export const brainEven = () => {
  func.greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  func.engine(conditionBrainEven);
};
