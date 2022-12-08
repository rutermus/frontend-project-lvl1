import readlineSync from 'readline-sync';

export const getAnswer = (question) => {
    const answer = readlineSync.question(question);
    return answer;
};