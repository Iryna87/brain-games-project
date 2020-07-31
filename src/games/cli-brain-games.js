// give.js
import readlineSync from 'readline-sync';

const playBrainGames = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const greetings = `Hello, ${name}!`;
  console.log(greetings);
};
export default playBrainGames;
