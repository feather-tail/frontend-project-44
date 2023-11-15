import { launchGame, getRandomNumber } from '../index.js';

const getCorrectAnswer = (numOne, numTwo) => {
  let correctAnswer = '';
  if (numTwo % numOne === 0) {
    correctAnswer = String(numOne);
    return correctAnswer;
  }
  for (let i = 1; i <= numOne / 2; i += 1) {
    if (numTwo % i === 0 && numOne % i === 0) {
      correctAnswer = String(i);
    }
  }
  return correctAnswer;
};

const generateGCD = () => {
  const randNumFirst = getRandomNumber(1, 100);
  const randNumSecond = getRandomNumber(1, 100);
  const question = `${randNumFirst} ${randNumSecond}`;
  const correctAnswer = getCorrectAnswer(randNumFirst, randNumSecond);
  return { question, correctAnswer };
};

const launchBrainGCD = () => {
  launchGame(generateGCD, 'Find the greatest common divisor of given numbers.');
};

export default launchBrainGCD;
