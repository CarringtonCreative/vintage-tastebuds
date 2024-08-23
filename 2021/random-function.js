/**
 * Problem:
 *  Random Function
 * Description:
 *   Using a function rand7() that returns an integer from 1 to 7 (inclusive)
 *   with uniform probability, implement a function rand5() that returns an integer
 *   from 1 to 5 (inclusive).
 * Approach:
 *  Leverage JS Math library to generate a random number between 0 and 1 exclusive.
 *  Handle the feature of the function needing to be from 1-5 inclusive.
 * Complexity:
 *  Time => O(1)
 *  Space => O(1)
 *
 * Comments:
 *
 * @param {string} string Param description
 * @return {number}
 */

const normalizeNumber = (percentage, number) => {
  return Math.round(percentage * 10) % number;
};

const rand5 = () => {
  const num = 5;
  const randomPercentage = Math.random();
  return normalizeNumber(randomPercentage, num) + 1;
};

const rand7 = () => {
  const num = 7;
  const randomPercentage = Math.random();
  return normalizeNumber(randomPercentage, num) + 1;
};

console.log("rand5() result:", rand5());
console.log("rand7() result:", rand7());
