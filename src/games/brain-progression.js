import runGame from '../index.js';

const generateProgression = () => {
  const randNum = Math.floor(Math.random() * 9) + 1;
  const arr = [];
  let num = randNum;
  for (let i = 0; i < 10; i += 1) {
    num += randNum;
    arr.push(num);
  }
  const correctAnswerIndex = Math.floor(Math.random() * 10);
  const correctAnswer = String(arr[correctAnswerIndex]);
  arr[correctAnswerIndex] = '..';
  const question = arr.join(' ');
  return { question, correctAnswer };
};

const launchBrainProgression = () => {
  runGame(generateProgression, 'What number is missing in the progression?');
};

export default launchBrainProgression;
