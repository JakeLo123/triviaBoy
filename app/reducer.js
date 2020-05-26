export default function quizReducer(state, action) {
  switch (action.type) {
    case 'START_QUIZ':
      return { ...state, questions: [1, 2, 3] };
    default:
      throw new Error(
        'an action was dispatched that I did not recognize.\nSincerely,\n the quizReducer'
      );
  }
}
