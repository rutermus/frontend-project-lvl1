import {
  welcomeMessage,
  getAnswer,
  userGreetingByName,
} from './index.js';

const brainGamesGreeting = (userNameQuestion) => {
  welcomeMessage();
  const userName = getAnswer(userNameQuestion);
  userGreetingByName(userName);
  return userName;
};

export default brainGamesGreeting;
