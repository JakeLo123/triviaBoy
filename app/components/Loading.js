import React from 'react';

const Loading = () => {
  return (
    <div className="loading-container">
      <img
        className="loading-balls"
        src="./images/loading-balls.gif"
        alt="loading"
      />
      <h1 className="loading-text">Loading</h1>
      <img
        className="loading-balls"
        src="./images/loading-balls.gif"
        alt="loading"
      />
    </div>
  );
};

export default Loading;
