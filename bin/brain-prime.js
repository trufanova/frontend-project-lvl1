#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/sli.js';
import {
  getRandom, getCongratulations, wrongAnswerMessage, correctAnswerMessage, askThreeQuestions,
} from '../index.js';

let random1 = 0;
let counter = 0;

const getCorrectAnswer = (num) => {
  let flag = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break; // выйдем из цикла
    }
  }
  if (flag) {
    return 'yes';
  }
  return 'no';
};

const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const question = () => {
    random1 = getRandom(1, 1000);
    const correctAnswer = getCorrectAnswer(random1);

    console.log(`Question: ${random1}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      correctAnswerMessage();
      counter += 1;
    } else {
      wrongAnswerMessage(answer, correctAnswer);
    }
  };

  askThreeQuestions(question);
  getCongratulations(counter);
};

hello();
prime();
