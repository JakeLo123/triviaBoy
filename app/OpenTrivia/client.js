import axios from 'axios';

// endpoint gets categories by id --> https://opentdb.com/api_category.php
// can also use this to look up category ids --> https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE
import categories from './categories.json';

function fetchQuestions(options) {
  const queryString = createQueryStringForOpenTrivia(options);
  return axios
    .get(queryString)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
}

function createQueryStringForOpenTrivia(options) {
  const { amount, category, difficulty } = options;
  const baseUrl = 'https://opentdb.com/api.php?';
  const categoryData = categories.find((c) => c.name === category);

  let queryString = `${baseUrl}amount=${amount || '5'}&type=multiple`;
  if (categoryData) {
    queryString += '&category=' + categoryData.id;
  }
  if (difficulty) {
    queryString += '&difficulty=' + difficulty;
  }
  return queryString;
}

export { fetchQuestions, createQueryStringForOpenTrivia };
