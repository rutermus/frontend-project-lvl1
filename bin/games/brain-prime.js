#!/usr/bin/env node

import brainGamesGreeting from '../../src/cli.js';

import {
  userNameQuestion,
  brainPrimeGame,
} from '../../src/index.js';

const userName = brainGamesGreeting(userNameQuestion);

brainPrimeGame(userName);
