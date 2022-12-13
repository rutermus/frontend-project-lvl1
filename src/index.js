import readlineSync from 'readline-sync';

// Game tasks
export const brainEvenTask = 'Answer "yes" if the number is even, otherwise answer "no".';
export const brainCalcTask = 'What is the result of the expression?';
export const brainGcdTask = 'Find the greatest common divisor of given numbers.';
// end Game tasks

// Game phrases and messages
export const welcomeMessage = () => console.log('Welcome to the Brain Games!');
export const userNameQuestion = 'May I have your name?';
export const userGreetingByName = (name) => console.log(`Hello, ${name}!`);
export const questionPhrase = 'Question:';
export const userAnswerMessage = 'Your answer:';
export const correctAnswerMessage = () => console.log('Correct!');
export const wrongAnswerMessage = (userAnswer, correctAnswer) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
export const userLoseMessage = (name) => console.log(`Let's try again, ${name}!`);
export const userWinMessage = (name) => console.log(`Congratulations, ${name}!`);
export const getTask = (taskDescription) => console.log(taskDescription);
export const getAnswer = (question) => readlineSync.question(`${question} `);
export const getQuestion = (firstItem, secondItem, thirdItem) => {
  if (secondItem === undefined && thirdItem === undefined) {
    return console.log(`${questionPhrase} ${firstItem}`);
  }
  if (thirdItem === undefined) {
    return console.log(`${questionPhrase} ${firstItem} ${secondItem}`);
  }
  return console.log(`${questionPhrase} ${firstItem} ${secondItem} ${thirdItem}`);
};
// end Game phrases and messages

// Games functions
export const getRandomInt = (max) => Math.floor(Math.random() * max);
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
export const getGreatestCommonDivisor = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }
  return firstNum + secondNum;
};
// end Games functions

// Games
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
    const firstOperand = getRandomInt(100);
    const secondOperand = getRandomInt(100);
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

export const brainGcdGame = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomInt(100);
    const secondNum = getRandomInt(100);
    const correctAnswer = getGreatestCommonDivisor(firstNum, secondNum);

    getQuestion(firstNum, secondNum);
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
// end Games
