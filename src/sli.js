import readlineSync from 'readline-sync';

let gettedName = '';
const getNameUser = () => gettedName;

const hello = () => {
  console.log('Welcome to the Brain Games!');
  gettedName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getNameUser()}`);
};

export default hello;
export { getNameUser };
