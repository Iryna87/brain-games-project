// give.js
import readlineSync from 'readline-sync';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const str = `Hello, ${name}!`;
  console.log(str);
};
export default brainGames;