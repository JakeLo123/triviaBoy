import React, { useContext, useState } from 'react';
import QuizContext from '../context';

const Results = () => {
  const { state } = useContext(QuizContext);
  const { userScore, questions } = state;

  return (
    <div className="card">
      <h1>Congratulations, you did okay 🎊</h1>
      <p>
        You scored {userScore}/{questions.length}
      </p>
    </div>
  );
};

export default Results;
