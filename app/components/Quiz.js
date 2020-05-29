/* eslint-disable camelcase */
import React, { useContext, useState, useRef } from 'react';
import QuizContext from '../context';
import Results from './Results';
import QuestionMetabar from './QuestionMetabar';

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const quizIsOver = currentQuestionIndex === state.questions.length;
  const [userInput, setUserInput] = useState('');
  const answerRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const { question, correct_answer, allAnswers, category, difficulty } =
    !quizIsOver && state.questions[currentQuestionIndex];

  const handleChange = (e) => setUserInput(e.target.value);
  const submitQuestion = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setCurrentQuestionIndex((prevState) => prevState + 1);
    }, 3000);

    if (userInput === correct_answer) {
      dispatch({ type: 'INCREMENT_SCORE' });
    }
    answerRefs.forEach((ref) => {
      if (ref.current.innerText === correct_answer)
        ref.current.classList.add('correct-answer');
      else ref.current.classList.add('incorrect-answer');
    });
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
        <h1>Question #{currentQuestionIndex + 1}</h1>
        <p>{question}</p>
        <div className="answers-list">
          {allAnswers.map((answer, idx) => {
            return (
              <div key={answer} className="radio-input" ref={answerRefs[idx]}>
                <label htmlFor={answer}>
                  <input
                    name="multiple-choice"
                    type="radio"
                    checked={userInput === answer}
                    value={answer}
                    id={answer}
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
