import React from 'react';

export default React.createContext({
  currentQuestionId: 0,
  questions: null,
  userAnswers: [],
});
