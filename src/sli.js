import readlineSync from 'readline-sync';

let gettedName = '';

const hello = () => {
  console.log('Welcome to the Brain Games!');
  gettedName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getNameUser()}`);
};
const getNameUser = () => gettedName;

export default hello;
export { getNameUser };
