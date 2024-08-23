/**
 * Problem: Search Matrix
 *
 * Description:
 * Given the integer X, find X in the matrix. If X is found, return true else
 * return false. Note: The matrix values are sorted such that m[0][0] < m[1][1]
 * ... m[n-1][n-1], where n == total elements in the matrix
 *
 * Approach:
 *  Perform a linear search on the matrix to find the element
 * Complexity:
 *  Time => O(n*m): Worst case scenario is that we search the entire matrix
 *  Space => O(1): We don't need to create any additional space
 *
 * Comments:
 *  Because the matrix elements are sorted in ascending order we can short
 *  circuit out if we ever come across an element that is greater than X
 * @param {number} number The element X that you are seraching for.
 * @param {array} array Param description
 * @return {boolean} Return value based on if X was found
 */

// TODO: FINISH ALGORITHM

/* 
  find middle of array
  find middle of subarray
  
  find middle row
  find middle column
  check middle element
  check leftmost element
  check rightmost element
  if element is less than leftmost element search previous row
  if element is greater than rightmost element search next row 
*/

const searchMatrix = (x, matrix) => {
  let i = 0;
  let j = 0;
  let m = matrix[i].length;
  let n = matrix.length;
  while (i < m && j < n) {
    const element = matrix[i][j];
    if (element == x) {
      return true;
    } else if (element > x) {
      return false;
    } else if (i == m || j == n) {
      return false;
    } else if (i == m - 1) {
      i = 0;
      j++;
    } else {
      i++;
    }
  }
  return false;
};

const x = 10;
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const found = searchMatrix(x, matrix);
console.log("Element: ", x, ", was found ", found);

const getMiddleElement = (row, matrix) => {
  const col = Math.round(matrix[row].length / 2);
  return matrix[row][col];
};

const getLeftElement = (row, col, matrix) => {
  return matrix[row][col];
};

const getRightElement = (row, matrix) => {
  return matrix[row][matrix.length - 1];
};

const binarySearchMatrix = (x, matrix) => {
  let i = 0;
  let j = 0;
  let middle = getMiddleElement(i, matrix);
  let left = getLeftElement(i, j, matrix);
  let right = getRightElement(i, matrix);

  while (i >= 0 && i < matrix[0].length && j >= 0 && j < matrix.length) {
    if (middle == x) {
      return true;
    } else if (left > x) {
      // go left
      left = matrix[i - 1][0];
      middle = getMiddleElement(i - 1, matrix);
      left = matrix[i - 1][0];
    } else if (right < x) {
      // go right
      middle = getMiddleElement(i + 1, matrix);
    } else if (left < x && middle > x) {
      // use inner left array
    } else if (right > x && middle < x) {
      // use inner right array
    }
  }
  return false;
};
