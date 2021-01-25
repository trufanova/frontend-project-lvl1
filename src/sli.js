import readlineSync from 'readline-sync';

const getNameUser = () => readlineSync.question('May I have your name? ');
const hello = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${getNameUser()}`);
};

export default hello;
export { getNameUser };
