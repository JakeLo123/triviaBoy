import { expect } from 'chai';
import OpenTriviaClient from '../app/OpenTrivia/client';

describe('OpenTriviaClient', () => {
  it('should have the correct base url', () => {
    const client = new OpenTriviaClient({});
    expect(client.baseUrl).to.equal('https://opentdb.com/api.php?');
  });
  describe('amount property', () => {
    it('should initialize correctly', () => {
      const client = new OpenTriviaClient({ amount: '6' });
      expect(client.amount).to.equal('6');
    });
    it('should initialize to 5 if not specified', () => {
      const client = new OpenTriviaClient({});
      expect(client.amount).to.equal('5');
    });
  });
  it('should have the correct category property', () => {
    const client = new OpenTriviaClient({ category: 'Science & Nature' });
    expect(client.category).to.deep.equal({
      id: 17,
      name: 'Science & Nature',
    });
  });
  describe('#queryString', () => {
    it('should correctly build a queryString', () => {
      const client = new OpenTriviaClient({ amount: '10' });
      expect(client.queryString()).to.equal(
        'https://opentdb.com/api.php?amount=10&type=multiple'
      );
    });
    it('should correctly handle all properties', () => {
      const client = new OpenTriviaClient({
        amount: '10',
        category: 'Science & Nature',
        difficulty: 'easy',
      });
      expect(client.queryString()).to.equal(
        'https://opentdb.com/api.php?amount=10&type=multiple&category=17&difficulty=easy'
      );
    });
  });
});
