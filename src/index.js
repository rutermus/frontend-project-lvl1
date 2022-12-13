import readlineSync from 'readline-sync';

// game variables
export const gamesNumber = 3;

// Game tasks
export const brainEvenTask = 'Answer "yes" if the number is even, otherwise answer "no".';
export const brainCalcTask = 'What is the result of the expression?';
export const brainGcdTask = 'Find the greatest common divisor of given numbers.';
export const brainProgressionTask = 'What number is missing in the progression?';
export const brainPrimeTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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
// result => from 0 to (max - 1)

export const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);
// result => from min to (max - 1)

export const roundedSqrt = (num) => Math.ceil(Math.sqrt(num));

const isNumPrime = (num) => {
  let result = 'yes';
  if (num <= 0 || num === 1) {
    result = 'no';
    return result;
  }
  for (let i = 2; i <= roundedSqrt(num); i += 1) {
    if (num % i === 0 && num !== i) {
      result = 'no';
      break;
    }
  }
  return result;
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

export const makeProgression = (firstItem, step, length) => {
  const progression = [];
  let item = firstItem;
  for (let i = 0; i < length; i += 1) {
    progression.push(item);
    item += step;
  }
  return progression;
};

export const hideItem = (arr, hiddenItemIndex) => {
  let result = '';
  const hiddenItem = '..';

  for (let i = 0; i < arr.length; i += 1) {
    if (i === hiddenItemIndex) {
      result += `${hiddenItem} `;
    } else {
      result += `${arr[i]} `;
    }
  }
  return result;
};
// end Games functions

// Games
export const brainEvenGame = (name) => {
  getTask(brainEvenTask);
  for (let i = 0; i < gamesNumber; i += 1) {
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
    if (i === (gamesNumber - 1)) {
      userWinMessage(name);
    }
  }
};

export const brainCalcGame = (name) => {
  const operators = ['+', '-', '*'];
  getTask(brainCalcTask);

  for (let i = 0; i < gamesNumber; i += 1) {
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
    if (i === (gamesNumber - 1)) {
      userWinMessage(name);
    }
  }
};

export const brainGcdGame = (name) => {
  for (let i = 0; i < gamesNumber; i += 1) {
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
    if (i === (gamesNumber - 1)) {
      userWinMessage(name);
    }
  }
};

export const brainProgressionGame = (name) => {
  getTask(brainProgressionTask);

  for (let i = 0; i < gamesNumber; i += 1) {
    const firstItem = getRandomInt(100);
    const progressionLength = getRandomArbitrary(5, 11);
    const progressionStep = getRandomArbitrary(2, 6);
    const hiddenItemIndex = getRandomInt(progressionLength);

    const progression = makeProgression(firstItem, progressionStep, progressionLength);
    const taskCondition = hideItem(progression, hiddenItemIndex);
    const correctAnswer = progression[hiddenItemIndex];

    getQuestion(taskCondition);
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
    if (i === (gamesNumber - 1)) {
      userWinMessage(name);
    }
  }
};

export const brainPrimeGame = (name) => {
  getTask(brainPrimeTask);
  for (let i = 0; i < gamesNumber; i += 1) {
    const num = getRandomInt(100);
    const correctAnswer = isNumPrime(num);

    getQuestion(num);
    const userAnswer = getAnswer(userAnswerMessage);

    if (userAnswer === correctAnswer) {
      correctAnswerMessage();
    }
    if (userAnswer !== correctAnswer) {
      wrongAnswerMessage(userAnswer, correctAnswer);
      userLoseMessage(name);
      break;
    }
    if (i === (gamesNumber - 1)) {
      userWinMessage(name);
    }
  }
};
// end Games
