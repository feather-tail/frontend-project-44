import { launchGame, getRandomNumber } from '../index.js';

const getGCD = (numOne, numTwo) => {
  let correctAnswer = '';
  if (numTwo % numOne === 0) {
    correctAnswer = numOne;
    return correctAnswer;
  }
  for (let i = 1; i <= numOne / 2; i += 1) {
    if (numTwo % i === 0 && numOne % i === 0) {
      correctAnswer = i;
    }
  }
  return correctAnswer;
};

const generateGCD = () => {
  const minRandonNum = 1;
  const maxRandonNum = 100;
  const randNumFirst = getRandomNumber(minRandonNum, maxRandonNum);
  const randNumSecond = getRandomNumber(minRandonNum, maxRandonNum);
  const question = `${randNumFirst} ${randNumSecond}`;
  const correctAnswer = String(getGCD(randNumFirst, randNumSecond));
  return { question, correctAnswer };
};

const launchBrainGCD = () => {
  launchGame(generateGCD, 'Find the greatest common divisor of given numbers.');
};

export default launchBrainGCD;
