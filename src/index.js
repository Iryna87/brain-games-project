// engine.js
import readlineSync from 'readline-sync';

const runEngine = (build, task) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  let questionCount = 0;
  const check = () => {
    const gameConditions = build();
    const [correctAnswer, question] = gameConditions;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    } else if (questionCount === 2 && userAnswer === correctAnswer) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
    } else {
      questionCount += 1;
      console.log('Correct!');
      check();
    }
  };
  check();
};
export default runEngine;
