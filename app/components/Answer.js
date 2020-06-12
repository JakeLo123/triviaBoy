import React from 'react';

const Answer = ({
  answer,
  userInput,
  handleUserInput,
  showFeedback,
  feedback,
}) => {
  return (
    <div className={`radio-input ${showFeedback && feedback}`}>
      <label htmlFor={answer}>
        <input
          name="multiple-choice"
          type="radio"
          checked={userInput === answer}
          value={answer}
          id={answer}
          onChange={handleUserInput}
        />
        <span>{answer}</span>
      </label>
    </div>
  );
};

export default Answer;
