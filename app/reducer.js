export default function quizReducer(state, action) {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case 'SHOW_FORM':
      return { ...state, showForm: true };
    case 'FETCH_QUESTIONS':
      return { ...state, questions: action.payload };
    case 'INCREMENT_SCORE':
      return { ...state, userScore: state.userScore + 1 };
    case 'RESET':
      return {
        ...state,
        questions: null,
        userScore: 0,
        currentQuestionIndex: 0,
      };
    default:
      throw new Error(
        'an action was dispatched that I did not recognize.\nSincerely,\n the quizReducer'
      );
  }
}
