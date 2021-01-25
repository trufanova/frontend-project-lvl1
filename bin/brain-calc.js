#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/sli.js';
import {
  getRandom, getCongratulations, wrongAnswerMessage, correctAnswerMessage, askThreeQuestions,
} from '../index.js';

let random1 = 0;
let random2 = 0;
let counter = 0;

const getRandomSignOperation = () => {
  const randomSignOperation = getRandom(1, 3);
  if (randomSignOperation === 1) {
    return '+';
  } if (randomSignOperation === 2) {
    return '-';
  }
  return '*';
};

const getCorrectAnswer = (num1, num2, sign) => {
  if (sign === '+') {
    return num1 + num2;
  }
  if (sign === '-') {
    return num1 - num2;
  }

  return num1 * num2;
};

const calc = () => {
  console.log('What is the result of the expression?');
  const question = () => {
    random1 = getRandom(1, 20);
    random2 = getRandom(1, 20);
    const randomSignOperation = getRandomSignOperation();
    const correctAnswer = getCorrectAnswer(random1, random2, randomSignOperation);

    console.log(`Question: ${random1} ${randomSignOperation} ${random2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(correctAnswer) === Number(answer)) {
      counter += 1;
      return correctAnswerMessage();
    }
    wrongAnswerMessage(answer, correctAnswer);
    return false;
  };

  askThreeQuestions(question);
  getCongratulations(counter);
};

hello();
calc();
