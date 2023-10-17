import { add } from './index.ts';

describe('add function', () => {
  it('the sum of a and b', () => {
    const testA = 10;
    const testB = 20;
    const rightAnswer = testA + testB;

    const result = add(testA, testB);

    expect(result).toEqual(rightAnswer);
  })
})