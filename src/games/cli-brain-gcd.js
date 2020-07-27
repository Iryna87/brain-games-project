// give2.js

import * as func from '../index.js';
import randomNumberRange from '../utils.js';

export const conditionBrainGcd = () => {
  let resultString = '';
  const rundomNumber1 = randomNumberRange(1, 100);
  const rundomNumber2 = randomNumberRange(1, 100);
  resultString = `${rundomNumber1} ${rundomNumber2}`;
  const questionToScreen = `Question: ${resultString}`;
  console.log(questionToScreen);
  const coll = [];
  coll.push(rundomNumber1, rundomNumber2);
  let result = '';
  for (let i = 1; i <= 200; i += 1) {
    if (coll[0] % i === 0 && coll[1] % i === 0) {
      result = i;
    }
  }
  return String(result);
};
export const gameQuestion = 'Find the greatest common divisor of given numbers.';

export const brainGcd = () => {
  func.greetings();
  console.log(gameQuestion);
  func.engine(conditionBrainGcd);
};
