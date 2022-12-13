#!/usr/bin/env node

import { brainGamesGreeting } from '../../src/cli.js';

import { userNameQuestion, brainGcdGame } from '../../src/index.js';

const userName = brainGamesGreeting(userNameQuestion);

brainGcdGame(userName);
