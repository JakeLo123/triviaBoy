import React from 'react';

export default function QuestionMetabar({ category, difficulty, score }) {
  return (
    <div className="bar">
      <p>
        <strong>Category: </strong>
        {category}
      </p>
      <p>
        <strong>Difficulty: </strong>
        {difficulty}
      </p>
      <p id="score">{score}</p>
    </div>
  );
}
