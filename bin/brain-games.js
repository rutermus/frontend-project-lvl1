#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';

const mainGreeting = 'Welcome to the Brain Games!';
const userNameQuestion = 'May I have your name? ';
const userGreetingPhrase = 'Hello';

console.log(mainGreeting);
const userName = getAnswer(userNameQuestion);

console.log(`${userGreetingPhrase}, ${userName}!`);
