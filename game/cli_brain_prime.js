// give_prime.js

import * as func from './index.js';

export const conditionBrainPrime = () => {
    const randomNumberRange = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };
    
    let randomNumber = randomNumberRange(1, 100);
    let question = `Question: ${randomNumber}`;
    console.log(question);

    let isPrime = 0;
        for (let i = 1; i <= randomNumber; i += 1) {
            if (randomNumber % i === 0) {
            isPrime += 1;
            }
        };
    let result = '';
    if (isPrime < 3) {
        result = 'yes';
        } else {
            result = 'no';
        };
    //console.log(res);  
    //console.log(result); 
    return result;    
};

export const brainPrime = () => {

    func.greetings();

    console.log ('Answer "yes" if given number is prime. Otherwise answer "no".');

    func.engineBrainPrime();
};