import { launchGame, getRandomNumber } from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateEven = () => {
  const minRandonNum = 1;
  const maxRandonNum = 10;
  const randNum = getRandomNumber(minRandonNum, maxRandonNum);
  const correctAnswer = isEven(randNum) ? 'yes' : 'no';

  return { question: `${randNum}`, correctAnswer };
};

const launchBrainEven = () => {
  launchGame(generateEven, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default launchBrainEven;
