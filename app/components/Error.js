import React from 'react';

const Error = ({ errorMsg }) => {
  return (
    errorMsg && (
      <>
        <p className="error-msg">{errorMsg}</p>
        <p className="error-msg">
          Contribute questions to our database at{' '}
          <a href="https://opentdb.com/">opentdb.com</a>
        </p>
      </>
    )
  );
};

export default Error;
