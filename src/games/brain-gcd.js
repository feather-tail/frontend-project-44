import { launchGame, getRandomNumber } from '../index.js';

const getGCD = (numOne, numTwo) => {
  if (numTwo % numOne === 0) {
    return numOne;
  }
  for (let i = numOne / 2; i >= 1; i -= 1) {
    if (numTwo % i === 0 && numOne % i === 0) {
      return i;
    }
  }
  return 1;
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
