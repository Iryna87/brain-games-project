// brain-games.js
import readlineSync from 'readline-sync';

const text = 'Welcome to the Brain Games!';

const playBrainGames = () => {
  console.log(text);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default playBrainGames;
