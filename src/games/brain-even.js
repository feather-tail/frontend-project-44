import runGame from '../index.js';

const generateEven = () => {
  const randNum = Math.floor(Math.random() * 100) + 1;
  const question = `${randNum}`;
  const correctAnswer = randNum % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

const launchBrainEven = () => {
  runGame(generateEven, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default launchBrainEven;
