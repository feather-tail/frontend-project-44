import { launchGame, getRandomNumber } from '../index.js';

const generateEven = () => {
  const randNum = getRandomNumber(1, 10);
  const question = `${randNum}`;
  const correctAnswer = randNum % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

const launchBrainEven = () => {
  launchGame(generateEven, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default launchBrainEven;
