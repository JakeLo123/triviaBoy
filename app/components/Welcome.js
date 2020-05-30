import React, { useContext } from 'react';
import QuizContext from '../context';
import { CreateQuiz } from './index';

const Welcome = () => {
  const { state, dispatch } = useContext(QuizContext);

  return state.showForm ? (
    <CreateQuiz />
  ) : (
    <div className="card welcome">
      <h1>Welcome to Trivia👦Boy</h1>
      <p>press begin to get started</p>
      <button
        onClick={() => dispatch({ type: 'SHOW_FORM' })}
        className="btn-max-width"
        type="button"
      >
        Begin
      </button>
    </div>
  );
};

export default Welcome;
