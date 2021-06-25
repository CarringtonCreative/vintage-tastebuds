/**
 * Problem:
 *   Fixed Point
 * Description:
 *   Given a sorted list of numbers find the fixed index. A fixed index is
 *   defined as an index where the value located at the index is equal to the
 *   index. Can this be done in sublinear time?
 * Approach:
 *   Because the list of numbers are sorted, we can use binary search on the
 *   list to find the fixed point.
 * Complexity:
 *  Time => O(logn) We are halving our search space each iteration,
 *   which leads to log n search time.
 *  Space => O(logn) Recusive depth/stack goes to log n at most. You are making
 *   log n times calls.
 * Comments:
 *   The iterative solution leads to a space complexity of constant time
 * @param {number[]} array Array of sorted numbers
 * @return {number}
 */

const getFixedPointItr = (nums) => {
  let index = Math.ceil(nums.length / 2);
  while (index >= 0 && index <= nums.length - 1) {
    const num = nums[index];
    if (num == index) return index;
    if (num > index) {
      index = Math.ceil(index / 2);
    } else {
      index = Math.ceil(index * 2);
    }
  }
  return null;
};

const getFixedPoint = (nums) => {
  const start = 0;
  const end = nums.length - 1;
  return getFixedPointHelper(start, end, nums);
};
const getFixedPointHelper = (start, end, nums) => {
  const index = Math.ceil((end - start) / 2);
  const num = nums[index];
  if (num == index) return index;
  if (index < 0 || index > nums.length - 1) return null;
  return num > index
    ? getFixedPointHelper(start, index - 1, nums)
    : getFixedPointHelper(index + 1, end, nums);
};
const nums = [-5, 1, 3, 4];
const result1 = getFixedPoint(nums);
console.log("Fixed Point Recursive:", result1);

const result2 = getFixedPointItr(nums);
console.log("Fixed Point Iterative:", result2);
