import React from 'react';

export default function QuestionMetabar({ category, difficulty, score }) {
  if (category.startsWith('Entertainment: ')) category = category.slice(14);
  if (category.startsWith('Science: ')) category = category.slice(8);

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
