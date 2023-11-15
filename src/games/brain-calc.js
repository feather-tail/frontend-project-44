import { launchGame, getRandomNumber } from '../index.js';

const generateCalculation = () => {
  const randNumFirst = getRandomNumber(1, 10);
  const randNumSecond = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

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
      throw new Error(`Unknown operator: '${randomOperator}'!`);
  }

  return { question, correctAnswer };
};

const launchBrainCalc = () => {
  launchGame(generateCalculation, 'What is the result of the expression?');
};

export default launchBrainCalc;
