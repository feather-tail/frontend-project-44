import { launchGame, getRandomNumber } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrime = () => {
  const minRandonNum = 1;
  const maxRandonNum = 100;
  const randNum = getRandomNumber(minRandonNum, maxRandonNum);
  const question = `${randNum}`;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const launchBrainPrime = () => {
  launchGame(generatePrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default launchBrainPrime;
