import {
  welcomeMessage,
  getAnswer,
  userGreetingByName,
} from './index.js';

export const brainGamesGreeting = (userNameQuestion) => {
  welcomeMessage();
  const userName = getAnswer(userNameQuestion);
  userGreetingByName(userName);
  return userName;
};
