import runGame from '../index.js';

const generatePrime = () => {
  const rand = Math.floor(Math.random() * 100);
  const question = `${rand}`;
  let correctAnswer = 'yes';

  for (let i = 2; i < rand / 2; i += 1) {
    if (rand % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }

  return { question, correctAnswer };
};

const launchBrainPrime = () => {
  runGame(generatePrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default launchBrainPrime;
