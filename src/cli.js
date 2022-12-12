import readlineSync from 'readline-sync';

export const mainGreeting = 'Welcome to the Brain Games!';
export const userNameQuestion = 'May I have your name?';
export const userGreetingPhrase = 'Hello';

export const brainGamesGreeting = (greetPhrase, helloUserPhrase) => {
  console.log(greetPhrase);
  const userName = readlineSync.question(`${userNameQuestion} `);
  console.log(`${helloUserPhrase}, ${userName}!`);
  return userName;
};
