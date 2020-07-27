// give_prog.js

import * as func from '../index.js';
import randomNumberRange from '../utils.js';

export const conditionBrainProgression = () => {
  const randomNumber1 = randomNumberRange(1, 11);
  const randomNumber2 = randomNumberRange(1, 90);
  const randomNumber3 = randomNumberRange(0, 10);
  const expressionArray = [randomNumber2 + randomNumber1];
  for (let i = 1; i < 10; i += 1) {
    expressionArray[i] = expressionArray[i - 1] + randomNumber1;
  }
  expressionArray.splice(randomNumber3, 1, '..');
  const expressionString = String(expressionArray);
  const expressionReplace = expressionString.replace(/[,]/g, ' ');
  const questionToScreen = `Question: ${expressionReplace}`;
  console.log(questionToScreen);
  let result = 0;
  if (randomNumber3 === 0) {
    result = expressionArray[randomNumber3 + 1] - randomNumber1;
  } if (randomNumber3 === 9) {
    result = expressionArray[randomNumber3 - 1] + randomNumber1;
  } else {
    result = expressionArray[randomNumber3 + 1] - randomNumber1;
  }
  return String(result);
};
export const gameQuestion = 'What number is missing in the progression?';

export const brainProgression = () => {
  func.greetings();
  console.log(gameQuestion);
  func.engine(conditionBrainProgression);
};
