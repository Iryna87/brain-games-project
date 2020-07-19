// give2.js

import * as func from './index.js';

export const conditionBrainCalc = () => {
  const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
  let resultString = '';
  const x = ['*', '-', '+'];
  const rundomNumber1 = randomNumberRange(1, 100);
  const rundomNumber2 = randomNumberRange(1, 100);
  const expressionSign = randomNumberRange(0, x.length);
  const expressionSignRundom = x[expressionSign];

  resultString = `${rundomNumber1} ${expressionSignRundom} ${rundomNumber2}`;
  const questionToScreen = `Question: ${resultString}`;
  console.log(questionToScreen);
  const result = eval(resultString);
  return String(result);
};

export const brainCalc = () => {
  func.greetings();
  console.log('What is the result of the expression?');
  func.engine(conditionBrainCalc);
};
