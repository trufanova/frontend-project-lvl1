#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello, { name } from './src/sli';

console.log('Welcome to the Brain Games!');
hello();

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let random = 0;
  let counter = 0;

  for (let i = 1; i < 4; i += 1) {
    random = Math.ceil(Math.random() * 1000);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');

    if (random % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else if (random % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else if (random % 2 === 0 && answer !== 'yes') {
      console.log(`${answer} is wrons answer ;(. Correct answer was 'yes`);
    } else if (random % 2 !== 0 && answer !== 'no') {
      console.log(`${answer} is wrons answer ;(. Correct answer was 'no`);
    } else {
      console.log(`${answer} is wrong answer. Try again`);
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}`);
  }
};
even();
