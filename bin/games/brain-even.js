#!/usr/bin/env node

import brainGamesGreeting from '../../src/cli.js';

import {
  userNameQuestion,
  brainEvenGame,
} from '../../src/index.js';

const userName = brainGamesGreeting(userNameQuestion);

brainEvenGame(userName);
