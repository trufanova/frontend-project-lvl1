import readlineSync from 'readline-sync';

export const name = readlineSync.question('May I have your name? ');
const hello = () => {
  console.log(`Hello, ${name}`);
};

export default hello;
