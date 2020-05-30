import React, { useContext, useState } from 'react';
import QuizContext from '../context';
import categories from '../OpenTrivia/categories.json';
import { fetchQuestions } from '../OpenTrivia/client';
import { Loading, Error } from './index';
import parseOpenTriviaQuestions from '../OpenTrivia/parser';

const CreateQuiz = () => {
  const { dispatch } = useContext(QuizContext);

  const numberOfQuestions = useFormData(5);
  const category = useFormData('Any Category');
  const difficulty = useFormData('Any Difficulty');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      amount: numberOfQuestions.value,
      category: category.value === 'Any Category' ? null : category.value,
      difficulty:
        difficulty.value === 'Any Difficulty' ? null : difficulty.value,
    };
    fetchQuestions(formData).then((questions) => {
      setLoading(false);
      if (questions.length) {
        dispatch({
          type: 'FETCH_QUESTIONS',
          payload: parseOpenTriviaQuestions(questions),
        });
      } else {
        setError(
          "Sorry, we don't have enough of the questions you want in our database."
        );
      }
    });
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="card">
      <form onSubmit={handleSubmit}>
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
          <select id="category" className="selector-max-width" {...difficulty}>
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
      <Error errorMsg={error} />
    </div>
  );
};

function useFormData(initialState) {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
}

export default CreateQuiz;
