#!/usr/bin/env node

import {
  brainGamesGreeting,
} from '../../src/cli.js';

import {
  userNameQuestion,
  brainProgressionGame,
} from '../../src/index.js';

const userName = brainGamesGreeting(userNameQuestion);

brainProgressionGame(userName);
