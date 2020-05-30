/* eslint-disable camelcase */
import { decode } from 'html-encoder-decoder';

export default function parseOpenTriviaQuestions(questions) {
  const decodedQuestions = shuffle(HTMLdecodeAllText(questions));
  return decodedQuestions.map((question) => {
    question.allAnswers = shuffle([
      ...question.incorrect_answers,
      question.correct_answer,
    ]);
    return question;
  });
}

function HTMLdecodeAllText(questions) {
  return questions.map((q) => {
    q.question = decode(q.question);
    q.correct_answer = decode(q.correct_answer);
    q.incorrect_answers = q.incorrect_answers.map((a) => decode(a));
    return q;
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
