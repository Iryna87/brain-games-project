// give_index.js
import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const greetings = () => {
  const str = `Hello, ${name}!`;
  console.log(str);
};

export const engine = (gameRule) => {
  let i = 0;
  const checkIfCorrect = () => {
    const correctAnswer = gameRule();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      const echoScreen = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
      console.log(echoScreen);
    } else if (i === 2 && userAnswer === correctAnswer) {
      console.log('Correct!');
      const congratulationsToScreen = `Congratulations, ${name}!`;
      console.log(congratulationsToScreen);
    } else {
      i += 1;
      console.log('Correct!');
      checkIfCorrect();
    }
  };
  checkIfCorrect();
};
