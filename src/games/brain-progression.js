import { launchGame, getRandomNumber } from '../index.js';

const getProgression = (randNum) => {
  const numbers = [];
  let num = randNum;
  for (let i = 0; i < 10; i += 1) {
    num += randNum;
    numbers.push(num);
  }
  return numbers;
};

const generateProgression = () => {
  const randNum = getRandomNumber(1, 10);
  const numbers = getProgression(randNum);
  const correctAnswerIndex = getRandomNumber(1, 10);
  const correctAnswer = String(numbers[correctAnswerIndex]);
  numbers[correctAnswerIndex] = '..';
  const question = numbers.join(' ');
  return { question, correctAnswer };
};

const launchBrainProgression = () => {
  launchGame(generateProgression, 'What number is missing in the progression?');
};

export default launchBrainProgression;
