// engine.js
import readlineSync from 'readline-sync';

const getAnswer = (buildGame, text) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n${text}`);
  let questionCount = 1;
  const roundsCount = 3;
  const checkAnswer = () => {
    const gameConditions = buildGame();
    const [correctAnswer, question] = gameConditions;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (questionCount === roundsCount) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    } else {
      questionCount += 1;
      console.log('Correct!');
      checkAnswer();
    }
  };
  checkAnswer();
};
export default getAnswer;
