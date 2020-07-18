// give_prog.js

import * as func from './index.js';

export const conditionBrainProgression = () => {
  const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const randomNumber1 = randomNumberRange(1, 11);
  const randomNumber2 = randomNumberRange(1, 90);
  const randomNumber3 = randomNumberRange(0, 10);
  const resultExpression = [randomNumber2 + randomNumber1];
  for (let i = 1; i < 10; i += 1) {
    resultExpression[i] = resultExpression[i - 1] + randomNumber1;
  }
  resultExpression.splice(randomNumber3, 1, '..');
  const resultString = String(resultExpression);
  const resultReplace = resultString.replace(/[,]/g, ' ');
  const question = `Question: ${resultReplace}`;
  console.log(question);
  let result = 0;
  if (randomNumber3 === 0) {
    result = resultExpression[randomNumber3 + 1] - randomNumber1;
  } if (randomNumber3 === 9) {
    result = resultExpression[randomNumber3 - 1] + randomNumber1;
  } else {
    result = resultExpression[randomNumber3 + 1] - randomNumber1;
  }
  return String(result);
};

export const brainProgression = () => {
  func.greetings();
  console.log('What number is missing in the progression?');
  func.engine(conditionBrainProgression());
};
