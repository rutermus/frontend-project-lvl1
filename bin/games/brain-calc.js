#!/usr/bin/env node

import {
  userNameQuestion,
  brainCalcGame,
} from '../../src/index.js';

import {
  brainGamesGreeting,
} from '../../src/cli.js';

const userName = brainGamesGreeting(userNameQuestion);

brainCalcGame(userName);
