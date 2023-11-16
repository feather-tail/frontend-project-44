import { launchGame, getRandomNumber } from '../index.js';

const getExpressionResult = (operator, numOne, numTwo) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateCalculation = () => {
  const minRandonNum = 1;
  const maxRandonNum = 10;
  const randNumFirst = getRandomNumber(minRandonNum, maxRandonNum);
  const randNumSecond = getRandomNumber(minRandonNum, maxRandonNum);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${randNumFirst} ${randomOperator} ${randNumSecond}`;
  const correctAnswer = String(getExpressionResult(randomOperator, randNumFirst, randNumSecond));

  return { question, correctAnswer };
};

const launchBrainCalc = () => {
  launchGame(generateCalculation, 'What is the result of the expression?');
};

export default launchBrainCalc;
