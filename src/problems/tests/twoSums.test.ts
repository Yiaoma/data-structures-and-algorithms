import { twoSum } from '../twoSum';

test('Should return empty array', () => {
  const nums: number[] = [];
  const target = 1;

  expect(twoSum(nums, target)).toEqual([]);
});

test('Should return [0, 1]', () => {
  const nums = [2 ,7, 11, 13];
  const target = 9;

  expect(twoSum(nums, target)).toEqual([0, 1]);
})
