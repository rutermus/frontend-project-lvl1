import readlineSync from 'readline-sync';

export const welcomeMessage = () => console.log('Welcome to the Brain Games!');
export const userNameQuestion = 'May I have your name?';
export const userGreetingByName = (name) => console.log(`Hello, ${name}!`);
export const brainEvenTask = 'Answer "yes" if the number is even, otherwise answer "no".';
export const brainCalcTask = 'What is the result of the expression?';
export const questionPhrase = 'Question:';
export const userAnswerMessage = 'Your answer:';

export const getRandomInt = (max) => Math.floor(Math.random() * max);
export const getAnswer = (question) => readlineSync.question(`${question} `);

export const correctAnswerMessage = () => console.log('Correct!');
export const wrongAnswerMessage = (userAnswer, correctAnswer) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
export const userWinMessage = (name) => console.log(`Congratulations, ${name}!`);
export const userLoseMessage = (name) => console.log(`Let's try again, ${name}!`);

export const getTask = (taskDescription) => console.log(taskDescription);

export const getQuestion = (firstOperand, operator, secondOperand) => {
  if (operator === undefined || secondOperand === undefined) {
    return console.log(`${questionPhrase} ${firstOperand}`);
  }
  return console.log(`${questionPhrase} ${firstOperand} ${operator} ${secondOperand}`);
};

export const calculate = (operator, firstOperand, secondOperand) => {
  let result = 0;
  if (operator === '+') {
    result = firstOperand + secondOperand;
  }
  if (operator === '-') {
    result = firstOperand - secondOperand;
  }
  if (operator === '*') {
    result = firstOperand * secondOperand;
  }
  return result;
};

export const brainEvenGame = (name) => {
  getTask(brainEvenTask);
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    getQuestion(number);

    const userAnswer = getAnswer(userAnswerMessage);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      correctAnswerMessage();
    } else {
      wrongAnswerMessage(userAnswer, correctAnswer);
      userLoseMessage(name);
      break;
    }
    if (i === 2) {
      userWinMessage(name);
    }
  }
};

export const brainCalcGame = (name) => {
  const operators = ['+', '-', '*'];
  getTask(brainCalcTask);

  for (let i = 0; i < 3; i += 1) {
    const operator = operators[getRandomInt(3)];
    const firstOperand = getRandomInt(10);
    const secondOperand = getRandomInt(10);
    const correctAnswer = calculate(operator, firstOperand, secondOperand);

    getQuestion(firstOperand, operator, secondOperand);

    const userAnswer = getAnswer(userAnswerMessage);
    const userAnswerToNum = Number(userAnswer);

    if (userAnswerToNum === correctAnswer) {
      correctAnswerMessage();
    }
    if (userAnswerToNum !== correctAnswer) {
      wrongAnswerMessage(userAnswer, correctAnswer);
      userLoseMessage(name);
      break;
    }
    if (i === 2) {
      userWinMessage(name);
    }
  }
};
