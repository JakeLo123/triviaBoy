import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import QuizContext from './context';
import quizReducer from './reducer';
import { Welcome, Quiz } from './components';

const App = () => {
  const initialState = useContext(QuizContext);
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const started = state.questions;
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {started ? <Quiz /> : <Welcome />}
    </QuizContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
