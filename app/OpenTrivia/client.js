import axios from 'axios';

// endpoint gets categories by id --> https://opentdb.com/api_category.php
// can also use this to look up category ids --> https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE
import categories from './categories.json';

class OpenTriviaClient {
  constructor(options) {
    this.baseUrl = 'https://opentdb.com/api.php?';
    this.amount = options.amount || '5';
    this.category = this.getCategoryInfo(options.category);
    this.difficulty = options.difficulty;
    this.type = 'multiple'; // multiple choice
  }

  fetchQuestions = () => {
    axios.get(this.queryString());
  };

  queryString = () => {
    let query = this.baseUrl + `amount=${this.amount}&type=${this.type}`;
    if (this.category) query += '&category=' + this.category.id;
    if (this.difficulty) query += '&difficulty=' + this.difficulty;
    return query;
  };

  // private
  getCategoryInfo = (categoryName) => {
    return categories.find(function (c) {
      return c.name === categoryName;
    });
  };
}

// const client = new OpenTriviaClient({});
// client.getCategoryInfo('Science & Nature');

export default OpenTriviaClient;
