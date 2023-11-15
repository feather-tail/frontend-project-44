import { launchGame, getRandomNumber } from '../index.js';

const getCorrectAnswer = (operator, numOne, numTwo) => {
  let correctAnswer = '';
  switch (operator) {
    case '+':
      correctAnswer = String(numOne + numTwo);
      break;
    case '-':
      correctAnswer = String(numOne - numTwo);
      break;
    case '*':
      correctAnswer = String(numOne * numTwo);
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
  return correctAnswer;
};

const generateCalculation = () => {
  const randNumFirst = getRandomNumber(1, 10);
  const randNumSecond = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${randNumFirst} ${randomOperator} ${randNumSecond}`;
  const correctAnswer = getCorrectAnswer(randomOperator, randNumFirst, randNumSecond);

  return { question, correctAnswer };
};

const launchBrainCalc = () => {
  launchGame(generateCalculation, 'What is the result of the expression?');
};

export default launchBrainCalc;
