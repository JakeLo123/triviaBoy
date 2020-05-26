import React from 'react';
import ReactDOM from 'react-dom';
import OpenTriviaClient from './OpenTrivia/client';
const client = new OpenTriviaClient({ amount: 4 });

const App = () => {
  return <div>this should be 4: {client.amount}</div>;
};

ReactDOM.render(<App />, document.getElementById('app'));
