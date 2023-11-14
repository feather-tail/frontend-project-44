import readlineSync from 'readline-sync';

const launchGame = (gameLogic, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n${gameDescription}`);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`,
      );
      i = 0;
      break;
    }
  }
};

export default launchGame;
