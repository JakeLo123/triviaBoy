import React from 'react';
import LoadingBalls from './animations/LoadingBalls';

const Loading = () => {
  return (
    <div className="loading-container">
      <LoadingBalls />
      <h1 className="loading-text">Loading</h1>
      <LoadingBalls />
    </div>
  );
};

export default Loading;
