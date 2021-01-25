#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/sli.js';
import {
  getRandom, getCongratulations, wrongAnswerMessage, correctAnswerMessage, askThreeQuestions,
} from '../index.js';

let random1 = 0;
let random2 = 0;
let counter = 0;

const getCorrectAnswer = (num1, num2) => {
  if (num2) {
    return getCorrectAnswer(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const question = () => {
    random1 = getRandom(1, 100);
    random2 = getRandom(1, 100);
    const correctAnswer = getCorrectAnswer(random1, random2);

    console.log(`Question: ${random1} ${random2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(correctAnswer) === Number(answer)) {
      correctAnswerMessage();
      counter += 1;
    } else {
      wrongAnswerMessage(answer, correctAnswer);
      return false;
    }
  };
  askThreeQuestions(question);
  getCongratulations(counter);
};

hello();
gcd();
