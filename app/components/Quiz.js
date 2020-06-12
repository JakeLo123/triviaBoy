/* eslint-disable camelcase */
import React, { useContext, useState, useRef } from 'react';
import QuizContext from '../context';
import { Results, QuestionMetabar, Answer } from './index';

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const [userInput, setUserInput] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const submitButtonRef = useRef(null);

  const quizIsOver = state.currentQuestionIndex === state.questions.length;

  const { question, correct_answer, allAnswers, category, difficulty } =
    !quizIsOver && state.questions[state.currentQuestionIndex];

  const handleUserInput = (e) => setUserInput(e.target.value);

  const submitQuestion = (e) => {
    e.preventDefault();
    setTimeout(() => {
      submitButtonRef.current.disabled = false;
      setShowFeedback(false);
      dispatch({ type: 'NEXT_QUESTION' });
    }, 3000);
    if (userInput === correct_answer) dispatch({ type: 'INCREMENT_SCORE' });
    submitButtonRef.current.disabled = true;
    setShowFeedback(true);
  };

  return quizIsOver ? (
    <Results />
  ) : (
    <div className="card question-card">
      <QuestionMetabar
        category={category}
        difficulty={difficulty}
        score={state.userScore}
      />
      <div className="card-content">
        <h1>Question #{state.currentQuestionIndex + 1}</h1>
        <p>{question}</p>
        <div className="answers-list">
          {allAnswers.map((answer) => {
            return (
              <Answer
                feedback={
                  answer === correct_answer
                    ? 'correct-answer'
                    : 'incorrect-answer'
                }
                showFeedback={showFeedback}
                key={answer}
                userInput={userInput}
                handleUserInput={handleUserInput}
                answer={answer}
              />
            );
          })}
        </div>
        <button
          onClick={submitQuestion}
          className="btn-max-width"
          type="button"
          ref={submitButtonRef}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
