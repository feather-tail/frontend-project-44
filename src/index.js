import readlineSync from 'readline-sync';

const launchGame = (ganerateGame, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n${gameDescription}`);

  const win = 3;
  for (let i = 0; i < win; i += 1) {
    const { question, correctAnswer } = ganerateGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { launchGame, getRandomNumber };
