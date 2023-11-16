import { launchGame, getRandomNumber } from '../index.js';

const getProgression = (randNum) => {
  const numbers = [];
  let num = randNum;
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    num += randNum;
    numbers.push(num);
  }
  return numbers;
};

const generateProgression = () => {
  const minRandonNum = 1;
  const maxRandonNum = 10;
  const minRandomIndex = 1;
  const maxRandomIndex = 9;
  const randNum = getRandomNumber(minRandonNum, maxRandonNum);
  const numbers = getProgression(randNum);
  const correctAnswerIndex = getRandomNumber(minRandomIndex, maxRandomIndex);
  const correctAnswer = String(numbers[correctAnswerIndex]);
  numbers[correctAnswerIndex] = '..';
  const question = numbers.join(' ');
  return { question, correctAnswer };
};

const launchBrainProgression = () => {
  launchGame(generateProgression, 'What number is missing in the progression?');
};

export default launchBrainProgression;
