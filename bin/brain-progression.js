#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getRandom, getCongratulations, wrongAnswerMessage, correctAnswerMessage, askThreeQuestions,
} from '../index.js';
import hello from '../src/sli.js';

const getArray = () => {
  const lengthArr = getRandom(5, 10);
  const arr = [];
  let el = getRandom(1, 50);
  const randomCounter = getRandom(1, 5);
  for (let i = 0; i < lengthArr; i += 1) {
    el += randomCounter;
    arr.push(el);
  }
  return arr;
};

const getQuestionArray = (arr, el) => {
  const tempArray = arr;
  tempArray[el] = '..';
  return tempArray.join(' ');
};

const progression = () => {
  console.log('What number is missing in the progression?');

  let counter = 0;

  const question = () => {
    const progressionArray = getArray();
    const elemX = getRandom(0, progressionArray.length - 1);
    const correctAnswer = progressionArray[elemX];
    console.log(getQuestionArray(progressionArray, elemX));
    const answer = readlineSync.question('Your answer: ');
    if (Number(correctAnswer) === Number(answer)) {
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
progression();
