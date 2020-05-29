/* eslint-disable camelcase */
import React, { useContext, useState } from 'react';
import QuizContext from '../context';
import Results from './Results';
import QuestionMetabar from './QuestionMetabar';

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const quizIsOver = currentQuestionIndex === state.questions.length;
  const [userInput, setUserInput] = useState('');

  const { question, correct_answer, allAnswers, category, difficulty } =
    !quizIsOver && state.questions[currentQuestionIndex];

  const handleChange = (e) => setUserInput(e.target.value);
  const submitQuestion = (e) => {
    e.preventDefault();
    if (userInput === correct_answer) {
      dispatch({ type: 'INCREMENT_SCORE' });
    }
    setCurrentQuestionIndex((prevState) => prevState + 1);
  };

  return quizIsOver ? (
    <Results />
  ) : (
    <div className="card question-card">
      <QuestionMetabar
        category={category}
        difficulty={difficulty}
        score={`${state.userScore}/${state.questions.length}`}
      />
      <div className="card-content">
        <h1>Question #{currentQuestionIndex + 1} </h1>
        <p>{question}</p>
        <div className="answers-list">
          {allAnswers.map((answer) => {
            return (
              <div key={answer} className="radio-input">
                <label htmlFor={answer}>
                  <input
                    name="multiple-choice"
                    type="radio"
                    checked={userInput === answer}
                    value={answer}
                    onChange={handleChange}
                  />
                  <span>{answer}</span>
                </label>
              </div>
            );
          })}
        </div>
        <button
          onClick={submitQuestion}
          className="btn-max-width"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
