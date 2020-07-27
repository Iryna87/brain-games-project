// give2.js

import * as func from '../index.js';
import randomNumberRange from '../utils.js';

export const conditionBrainCalc = () => {
  let resultString = '';
  const x = ['*', '-', '+'];
  const rundomNumber1 = randomNumberRange(1, 100);
  const rundomNumber2 = randomNumberRange(1, 100);
  const expressionSign = randomNumberRange(0, x.length);
  const expressionSignRundom = x[expressionSign];

  resultString = `${rundomNumber1} ${expressionSignRundom} ${rundomNumber2}`;
  const questionToScreen = `Question: ${resultString}`;
  console.log(questionToScreen);
  let result = 0;
  const arr = resultString.split(' ');
  switch (arr[1]) {
    case '+':
      result = Math.round((+arr[0] + +arr[2]) * 100) / 100;
      break;
    case '-':
      result = Math.round((+arr[0] - +arr[2]) * 100) / 100;
      break;
    case '*':
      result = Math.round((+arr[0] * +arr[2]) * 100) / 100;
      break;
    default:
      break;
  }
  return String(result);
};

export const gameQuestion = 'What is the result of the expression?';

export const brainCalc = () => {
  func.greetings();
  console.log(gameQuestion);
  func.engine(conditionBrainCalc);
};
