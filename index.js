import { nameUser } from './src/sli.js';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getCongratulations = (counter) => {
  if (counter === 3) {
    console.log(`Congratulations, ${nameUser}`);
  }
};

export const wrongAnswerMessage = (answer, correctAnswer) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'`);
};

export const correctAnswerMessage = () => { console.log('Correct!'); };

export const askThreeQuestions = (question) => {
  for (let i = 1; i < 4; i += 1) {
    question();
  }
};
