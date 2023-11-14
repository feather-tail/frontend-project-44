import launchGame from '../index.js';

const generatePrime = () => {
  const randNum = Math.floor(Math.random() * 100);
  const question = `${randNum}`;
  let correctAnswer = 'yes';

  for (let i = 2; i < randNum / 2; i += 1) {
    if (randNum % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }

  return { question, correctAnswer };
};

const launchBrainPrime = () => {
  launchGame(generatePrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default launchBrainPrime;
