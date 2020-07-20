// give1.js

import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const stringAnswer = `Hello, ${name}!`;
  console.log(stringAnswer);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('Question: 15');
  const answer = readlineSync.question('Your answer: ');
  if (answer !== 'no') {
    const stringAnswer1 = `${answer} is wrong answer ;(. Correct answer was "no". Let's try again, ${name}!`;
    console.log(stringAnswer1);
  } else {
    console.log('Correct!');
    console.log('Question: 6');
    const answer1 = readlineSync.question('Your answer: ');
    if (answer1 !== 'yes') {
      const stringAnswer2 = `${answer1} is wrong answer ;(. Correct answer was "yes". Let's try again, ${name}!`;
      console.log(stringAnswer2);
    } else {
      console.log('Correct!');
      console.log('Question: 7');
      const answer3 = readlineSync.question('Your answer: ');
      if (answer3 !== 'no') {
        const stringAnswer3 = `${answer3} is wrong answer ;(. Correct answer was "no". Let's try again, ${name}!`;
        console.log(stringAnswer3);
      } else {
        const stringAnswer4 = `Congratulations, ${name}!`;
        console.log('Correct!');
        console.log(stringAnswer4);
      }
    }
  }
};
export default brainEven;
