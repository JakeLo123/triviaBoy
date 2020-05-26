import React, { useContext, useState } from 'react';
import QuizContext from '../context';
import categories from '../OpenTrivia/categories.json';

const CreateQuiz = () => {
  const { dispatch } = useContext(QuizContext);
  const numberOfQuestions = useFormData(5);
  const category = useFormData('Any Category');
  const difficulty = useFormData('Any Difficulty');

  return (
    <div className="card">
      <form onSubmit={() => dispatch({ type: 'START_QUIZ' })}>
        <label className="label-max-width" htmlFor="number_of_questions">
          <span>Number of Questions</span>
          <select
            id="number_of_questions"
            className="selector-max-width"
            {...numberOfQuestions}
          >
            {[3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
        <label className="label-max-width" htmlFor="category">
          <span>Category</span>
          <select id="category" className="selector-max-width" {...category}>
            <option>Any Category</option>
            {categories.map((c) => (
              <option key={c.id}>{c.name}</option>
            ))}
          </select>
        </label>
        <label className="label-max-width" htmlFor="category">
          <span>Difficulty</span>
          <select id="category" className="selector-max-width" {...category}>
            <option>Any Difficulty</option>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </select>
        </label>
        <button className="btn-max-width" type="submit">
          Quiz Me
        </button>
      </form>
    </div>
  );
};

function useFormData(initialState) {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
}

export default CreateQuiz;
