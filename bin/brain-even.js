#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/sli.js';
import {
  getRandom, getCongratulations, wrongAnswerMessage, correctAnswerMessage, askThreeQuestions,
} from '../index.js';

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let random = 0;
  let counter = 0;

  const question = () => {
    random = getRandom(1, 100);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');

    if (random % 2 === 0 && answer === 'yes') {
      correctAnswerMessage();
      counter += 1;
    } else if (random % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else if (random % 2 === 0 && answer !== 'yes') {
      wrongAnswerMessage(answer, 'yes');
      return false;
    } else if (random % 2 !== 0 && answer !== 'no') {
      wrongAnswerMessage(answer, 'no');
      return false;
    }
  };

  askThreeQuestions(question);
  getCongratulations(counter);
};

hello();
even();
