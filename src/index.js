import readlineSync from 'readline-sync';

const runGame = (gameLogic, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n${gameDescription}`);

  let wins = 0;
  while (wins < 3) {
    const { question, correctAnswer } = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      wins += 1;
      if (wins === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`,
      );
      wins = 0;
      break;
    }
  }
};

export default runGame;
