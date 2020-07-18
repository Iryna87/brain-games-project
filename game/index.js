// give_index.js
import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const greetings = () => {
  const str = `Hello, ${name}!`;
  console.log(str);
};

export const engine = (result) => {
  let i = 0;
  const isRight = () => {
    console.log(result);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== result) {
      const echo = `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`;
      console.log(echo);
    } else if (i === 2 && answer === result) {
      console.log('Correct!');
      const congratulations = `Congratulations, ${name}!`;
      console.log(congratulations);
    } else {
      i += 1;
      console.log('Correct!');
      isRight();
    }
  };
  isRight();
};
