import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import QuizContext from './context';
import quizReducer from './reducer';
import { Welcome, Quiz, CreateQuiz } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const initialState = useContext(QuizContext);
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/quiz">
          <QuizContext.Provider value={{ state, dispatch }}>
            {state.questions ? <Quiz /> : <CreateQuiz />}
          </QuizContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
