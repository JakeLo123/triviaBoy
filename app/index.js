import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import OpenTriviaClient from './OpenTrivia/client';
import QuizContext from './context';
import quizReducer from './reducer';
import { Welcome, Quiz } from './components';

const App = () => {
  const initialState = useContext(QuizContext);
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const started = state.questions && state.questions.length;

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {started ? <Quiz /> : <Welcome />}
    </QuizContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
