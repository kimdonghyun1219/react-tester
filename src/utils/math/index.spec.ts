import { rangeNumbers } from './index.ts';

const NUMBERS_RANGE = {
  startA: 1,
  endA: 5,
  rangeA: [1, 2, 3, 4, 5],
  startB: 2,
  endB: -1,
  rangeB: [-1, 0, 1, 2],
}

describe('math utils', () => {
  it('a 이상 b 이하의 모든 정수를 담은 배열을 반환하는지 검사한다.', () => {
    expect(rangeNumbers(NUMBERS_RANGE.startA, NUMBERS_RANGE.endA)).toEqual(NUMBERS_RANGE.rangeA);
    expect(rangeNumbers(NUMBERS_RANGE.startB, NUMBERS_RANGE.endB)).toEqual(NUMBERS_RANGE.rangeB);
  })
})