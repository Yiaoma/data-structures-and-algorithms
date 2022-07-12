import { moveZeroes } from '../moveZeroes';

test('Should return [1, 3, 12, 0, 0]', () => {
  const array = [0, 1, 0, 3, 12];

  moveZeroes(array);

  expect(array).toEqual([1, 3, 12, 0, 0]);
});

test('Should return [0]', () => {
  const array = [0];

  moveZeroes(array);

  expect(array).toEqual([0]);
});
