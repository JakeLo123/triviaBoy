const perfectScore = [
  'Maximum perfection.',
  "Look at you. You're very smart.",
  'Most people would do worse... Not that you should compare yourself to others.',
];

const goodJobMessages = [
  'Are you some kind of genius? Great job.',
  "I'm so very proud of you.",
  'You deserve a treat because you did so good.',
];

const okayJobMessages = [
  'Congratulations, you did okay. 🎊',
  'You are the medium amount of smart.',
  "I guess you're average.",
];

const badJobMessages = [
  "You didn't do very well, but that doesn't mean you're a bad person.",
  "You'll do better next time, buddy.",
  "It's okay. It's just a dumb trivia game.",
];

const zeroPercent = [
  "You didn't even try.",
  "You got the lowest score possible, but it doesn't matter.",
  'You must try harder.',
];

function generateResultsMessage(userScore, amountOfQuestions) {
  userScore = Number(userScore);
  const score = ((userScore / amountOfQuestions) * 100).toFixed(0);
  let messages;

  if (score === 0) messages = zeroPercent;
  else if (score > 0 && score < 50) messages = badJobMessages;
  else if (score >= 50 && score < 75) messages = okayJobMessages;
  // eslint-disable-next-line eqeqeq
  else if (score == 100) messages = perfectScore;
  else messages = goodJobMessages;

  return getRandomElement(messages);
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default generateResultsMessage;
