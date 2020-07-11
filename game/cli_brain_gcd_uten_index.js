// give2.js

import readlineSync from 'readline-sync';
import * as func from './index.js';

func.nameF();

console.log('Find the greatest common divisor of given numbers.');

const randomNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
let a = '';

let rundomNumber1 = randomNumberRange(1, 100);

let rundomNumber2 = randomNumberRange(1, 100);

a = `${rundomNumber1} ${rundomNumber2}`;

let question = `Question: ${a}`;

console.log(question);

let b = [rundomNumber1, rundomNumber2];
        
let result = [];
    
  for (let i = 1; i <= 200; i += 1) {
     if (b[0] % i === 0 && b[1] % i === 0) {
        result = i;
      } 
  };


const answer = readlineSync.question('Yor answer: ');

if (Number(answer) !== result) {
    const echo = `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet\'s try again, ${func.name}!`;
    console.log (echo);

} else {
    console.log('Correct!');
    
    const randomNumberRange = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    let a = '';
    
    let rundomNumber1 = randomNumberRange(1, 100);
    
    let rundomNumber2 = randomNumberRange(1, 100);
    
    a = `${rundomNumber1} ${rundomNumber2}`;
    
    let question = `Question: ${a}`;
    
    console.log(question);
    
    let b = [rundomNumber1, rundomNumber2];
            
    let result = [];
        
      for (let i = 1; i <= 200; i += 1) {
         if (b[0] % i === 0 && b[1] % i === 0) {
            result = i;
          } 
      };
    
    const answer2= readlineSync.question('Yor answer: ');
    
    if (Number(answer2) !== result) {
        const echo = `'${answer2}' is wrong answer ;(. Correct answer was '${result}'.\nLet\'s try again, ${func.name}!`;
        console.log (echo);
        } else {
            console.log('Correct!');
    
            const randomNumberRange = (min, max) => {
                return Math.floor(Math.random() * (max - min) + min);
            };
            let a = '';
            
            let rundomNumber1 = randomNumberRange(1, 100);
            
            let rundomNumber2 = randomNumberRange(1, 100);
            
            a = `${rundomNumber1} ${rundomNumber2}`;
            
            let question = `Question: ${a}`;
            
            console.log(question);
            
            let b = [rundomNumber1, rundomNumber2];
                    
            let result = [];
                
              for (let i = 1; i <= 200; i += 1) {
                 if (b[0] % i === 0 && b[1] % i === 0) {
                    result = i;
                  } 
              };
              
            const answer3 = readlineSync.question('Yor answer: ');
    
                if (Number(answer3) !== result) {
                    const echo = `'${answer3}' is wrong answer ;(. Correct answer was '${result}'.\nLet\'s try again, ${func.name}!`;
                    console.log (echo);
                    } else {
                        console.log('Correct!');
                        const end = `Congratulations, ${func.name}!`;
                        console.log(end);
                }
        }

}