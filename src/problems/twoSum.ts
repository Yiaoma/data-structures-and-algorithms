/**
 * @param {number[]} nums array of numbers
 * @param {number} target target sum of two numbers
 * @returns {number[]} indices of two numbers such that they add up to target
 */
export function twoSum(nums: number[], target: number): number[] {
  const indices: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (indices[nums[i]] || indices[nums[i]] === 0) {
      return [indices[nums[i]], i];
    }

    indices[compliment] = i;
  }

  return [];
}
