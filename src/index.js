// engine.js
import readlineSync from 'readline-sync';

const runGame = (buildGame, description) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n${description}`);
  let currentRoundsCount = 1;
  const roundsCount = 3;
  const getAnswer = () => {
    const [correctAnswer, question] = buildGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (currentRoundsCount === roundsCount) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    } else {
      currentRoundsCount += 1;
      console.log('Correct!');
      getAnswer();
    }
  };
  getAnswer();
};
export default runGame;
