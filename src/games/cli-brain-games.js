// give.js
import readlineSync from 'readline-sync';

const playBrainGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default playBrainGames;
