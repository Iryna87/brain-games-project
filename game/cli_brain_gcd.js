// give2.js

import * as func from './index.js';

export const conditionBrainGcd = () => {
  const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
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

export const brainGcd = () => {
  func.greetings();
  console.log('Find the greatest common divisor of given numbers.');
  func.engine(conditionBrainGcd);
};
