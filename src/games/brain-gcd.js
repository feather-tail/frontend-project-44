import launchGame from '../index.js';

const generateGCD = () => {
  const randNumFirst = Math.floor(Math.random() * 10) + 1;
  const randNumSecond = Math.floor(Math.random() * 10) + 1;
  const question = `${randNumFirst} ${randNumSecond}`;
  let correctAnswer = '';
  if (randNumSecond % randNumFirst === 0) {
    correctAnswer = String(randNumFirst);
    return { question, correctAnswer };
  }
  for (let i = 1; i <= randNumFirst / 2; i += 1) {
    if (randNumSecond % i === 0 && randNumFirst % i === 0) {
      correctAnswer = String(i);
    }
  }
  return { question, correctAnswer };
};

const launchBrainGCD = () => {
  launchGame(generateGCD, 'Find the greatest common divisor of given numbers.');
};

export default launchBrainGCD;
