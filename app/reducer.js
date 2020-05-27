export default function quizReducer(state, action) {
  switch (action.type) {
    case 'FETCH_QUESTIONS':
      console.log('FETCH_QUESTIONS payload', action.payload);
      return { ...state, questions: action.payload };
    default:
      throw new Error(
        'an action was dispatched that I did not recognize.\nSincerely,\n the quizReducer'
      );
  }
}
