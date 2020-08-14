// brain-games.js
import readlineSync from 'readline-sync';

const description = 'Welcome to the Brain Games!';

const playBrainGames = () => {
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default playBrainGames;
