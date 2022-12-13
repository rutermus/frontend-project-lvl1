#!/usr/bin/env node

import {
  userNameQuestion,
  brainPrimeGame,
} from '../../src/index.js';

import {
  brainGamesGreeting,
} from '../../src/cli.js';

const userName = brainGamesGreeting(userNameQuestion);

brainPrimeGame(userName);
