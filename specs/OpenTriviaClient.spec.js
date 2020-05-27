import { expect } from 'chai';
import { createQueryStringForOpenTrivia } from '../app/OpenTrivia/client';

describe('createQueryStringForOpenTrivia', () => {
  it('should have the correct base url if passed no options', () => {
    expect(createQueryStringForOpenTrivia({})).to.equal(
      'https://opentdb.com/api.php?amount=5&type=multiple'
    );
  });
  it('should get the correct `amount` value', () => {
    const queryString = createQueryStringForOpenTrivia({ amount: '6' });
    expect(queryString).to.equal(
      'https://opentdb.com/api.php?amount=6&type=multiple'
    );
  });
  it('should have the correct category property', () => {
    const queryString = createQueryStringForOpenTrivia({
      category: 'Science & Nature',
    });
    expect(queryString).to.equal(
      'https://opentdb.com/api.php?amount=5&type=multiple&category=17'
    );
  });
  it('should correctly handle all properties', () => {
    const queryString = createQueryStringForOpenTrivia({
      amount: '10',
      category: 'Science & Nature',
      difficulty: 'easy',
    });
    expect(queryString).to.equal(
      'https://opentdb.com/api.php?amount=10&type=multiple&category=17&difficulty=easy'
    );
  });
});
