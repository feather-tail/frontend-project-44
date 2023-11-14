import launchGame from '../index.js';

const generateCalculation = () => {
  const randNumFirst = Math.floor(Math.random() * 10) + 1;
  const randNumSecond = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${randNumFirst} ${randomOperator} ${randNumSecond}`;
  let correctAnswer = '';
  switch (randomOperator) {
    case '+':
      correctAnswer = String(randNumFirst + randNumSecond);
      break;
    case '-':
      correctAnswer = String(randNumFirst - randNumSecond);
      break;
    case '*':
      correctAnswer = String(randNumFirst * randNumSecond);
      break;
    default:
      console.log('Error');
  }

  return { question, correctAnswer };
};

const launchBrainCalc = () => {
  launchGame(generateCalculation, 'What is the result of the expression?');
};

export default launchBrainCalc;
