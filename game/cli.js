// give.js
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

const str = `Hello, ${name}!`;

console.log(str);
