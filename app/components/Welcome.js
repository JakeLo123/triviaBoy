import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="card welcome">
      <h1>Welcome to Trivia👦Boy</h1>
      <p>press begin to get started</p>
      <Link to="/quiz">
        <button className="btn-max-width" type="button">
          Begin
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
