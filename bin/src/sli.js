import readlineSync from 'readline-sync';

let nameUser = '';
const hello = () => {
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
};

export default hello;
export { nameUser };
