import React, { useContext } from 'react';
import QuizContext from '../context';
import generateResultsMessage from '../congratulator';

const Results = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { userScore, questions } = state;
  const message = generateResultsMessage(userScore, questions.length);

  const resetQuiz = (e) => {
    e.preventDefault();
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="card">
      <h1>{message}</h1>
      <p>
        You answered {userScore} {userScore === 1 ? 'question' : 'questions'}{' '}
        correctly out of {questions.length}.
      </p>
      <button type="button" className="btn-max-width" onClick={resetQuiz}>
        Play Again
      </button>
    </div>
  );
};

export default Results;
