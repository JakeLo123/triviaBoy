import React, { useContext, useState } from 'react';
import QuizContext from '../context';
import Results from './Results';

const Quiz = () => {
  const { state } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const quizIsOver = currentQuestionIndex === state.questions.length;
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => setUserInput(e.target.value);

  const { question, correct_answer, allAnswers, category, difficulty } =
    !quizIsOver && state.questions[currentQuestionIndex];

  return quizIsOver ? (
    <Results />
  ) : (
    <div className="card">
      <h1>Question #{currentQuestionIndex + 1}</h1>
      <p>{question}</p>
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
  );
};

export default Quiz;
