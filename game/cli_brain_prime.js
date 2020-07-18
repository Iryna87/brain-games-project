// give_prime.js

import * as func from './index.js';

export const conditionBrainPrime = () => {
  const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const randomNumber = randomNumberRange(1, 100);
  const question = `Question: ${randomNumber}`;
  console.log(question);
  let isPrime = 0;
  for (let i = 1; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      isPrime += 1;
    }
  }
  let result = '';
  if (isPrime < 3) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

export const brainPrime = () => {
  func.greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  func.engine(conditionBrainPrime());
};
