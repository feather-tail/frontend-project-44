import { launchGame, getRandomNumber } from '../index.js';

const getCorrectAnswer = (num) => {
  let correctAnswer = 'yes';
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return correctAnswer;
};

const generatePrime = () => {
  const randNum = getRandomNumber(1, 100);
  const question = `${randNum}`;
  const correctAnswer = getCorrectAnswer(question);

  return { question, correctAnswer };
};

const launchBrainPrime = () => {
  launchGame(generatePrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default launchBrainPrime;
