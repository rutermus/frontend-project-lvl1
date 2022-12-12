#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { brainGamesGreeting, mainGreeting, userGreetingPhrase } from '../src/cli.js';

const userName = brainGamesGreeting(mainGreeting, userGreetingPhrase);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEvenGame = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const number = Math.ceil(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

isEvenGame(userName);
