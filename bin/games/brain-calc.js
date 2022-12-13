#!/usr/bin/env node

import brainGamesGreeting from '../../src/cli.js';

import {
  userNameQuestion,
  brainCalcGame,
} from '../../src/index.js';

const userName = brainGamesGreeting(userNameQuestion);

brainCalcGame(userName);
