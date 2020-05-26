import React, { useContext } from 'react';
import QuizContext from '../context';

const CreateQuiz = () => {
  const { dispatch } = useContext(QuizContext);
  return (
    <div className="card">
      <h1>You are taking the quiz</h1>
    </div>
  );
};

export default CreateQuiz;
