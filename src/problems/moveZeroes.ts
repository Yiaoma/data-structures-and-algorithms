/**
 * Moves all zeroes to the end of the array while maintaining the relative order of the non-zero elements.
 *
 * @param nums array of numbers
 */
export function moveZeroes(nums: number[]): void {
  for (
    let lastZeroIndex = 0, currentIndex = 0;
    currentIndex < nums.length;
    currentIndex++
  ) {
    if (nums[currentIndex] != 0) {
      const temp = nums[currentIndex];
      nums[currentIndex] = nums[lastZeroIndex];
      nums[lastZeroIndex++] = temp;
    }
  }
}
