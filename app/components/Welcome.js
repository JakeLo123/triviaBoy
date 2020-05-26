import React, { useState } from 'react';
import CreateQuiz from './CreateQuiz';

const Welcome = () => {
  const [showForm, setShowForm] = useState(false);

  return showForm ? (
    <CreateQuiz />
  ) : (
    <div className="card">
      <h1>Welcome to Trivia Boy!</h1>
      <p>press begin to get started</p>
      <button
        onClick={() => setShowForm(true)}
        className="btn-max-width"
        type="button"
      >
        Begin
      </button>
    </div>
  );
};

export default Welcome;
