#!/usr/bin/env node

import {
  userNameQuestion,
  brainEvenGame,
} from '../../src/index.js';

import {
  brainGamesGreeting,
} from '../../src/cli.js';

const userName = brainGamesGreeting(userNameQuestion);

brainEvenGame(userName);
