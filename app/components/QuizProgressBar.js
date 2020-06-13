import React from 'react';

const QuizProgressBar = ({ questions, currentQuestion }) => {
  return (
    <div className="quiz-progress-bar">
      {questions.map((q, idx) => {
        return (
          <div key={q}>
            <div className={`${idx <= currentQuestion ? 'filled' : 'empty'}`} />
          </div>
        );
      })}
    </div>
  );
};

export default QuizProgressBar;
