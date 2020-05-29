export default function parseOpenTriviaQuestions(questions) {
  questions = shuffle(questions);
  return questions.map((question) => {
    question.allAnswers = shuffle([
      ...question.incorrect_answers,
      question.correct_answer,
    ]);
    return question;
  });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}
