#!/usr/bin/env node

import {
  userNameQuestion,
} from '../src/index.js';

import {
  brainGamesGreeting,
} from '../src/cli.js';

brainGamesGreeting(userNameQuestion);
