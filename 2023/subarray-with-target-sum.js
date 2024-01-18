// Use queue to enqueue and dequeue values
// Add values to sum and queue while they are less than the target
// if we find a value that is over the target
// dequeue the oldest/first element in the queue
// subtract value from sum
// check if sum is equal to target
// if not keep dequeuing elements until the sum equals target
// if only one element is left in the queue then keep iterating through the list
// repeat

// array:[1, 2, 3], k:5
// output: [2, 3]

const subarrayWithTargetSum = (array, k) => {
  const output = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let newSum = sum + element;
    output.push(element);
    if (newSum < k) {
      sum = newSum;
    } else if (newSum == k) {
      return output;
    } else if (newSum > k) {
      while (array.length > 1) {
        let firstElement = output.shift();
        if (newSum - array[0] == k) {
          return output;
        }
        newSum -= firstElement;
      }
    }
  }
  return output;
};

let array = [1, 2, 3];
let result = subarrayWithTargetSum(array, 5);
console.log(result);

const subarrayWithTargetSum2 = (array, k) => {
  let sum = 0;
  let start = 0;
  for (let end = 0; end < array.length; end++) {
    sum += array[end];
    while (sum >= k) {
      if (sum == k) {
        return array.slice(start, end + 1);
      }
      sum -= array[start++];
    }
  }
  return [];
};

array = [1, 2, 3];
result = subarrayWithTargetSum2(array, 5);
console.log(result);

// [1, 3, 2, 5, 7, 2], 14

// Make a linear pass over the array
// Calculate the cumulated sum at each index
// Store sums in a hash map

// Calc the difference of the sum and the target
// Check if store has difference as key
// Use that index+1 as the start of the subarray
// Use the current index as the end of the array
// Return the subarray

const subarrayWithTargetSum3 = (array, k) => {
  let sum = 0;
  const sums = {};
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    sums[sum] = i; // 1:0, 3:1, 6:2
    let start = sums[sum - k];
    if (start >= 0) {
      // 1-5=-4, 3-5=-2, 6-5=1
      let end = i + 1;
      return array.slice(start + 1, end); // 1:0 -> i:1, i:2
    }
  }
  return [];
};

array = [1, 2, 3];
result = subarrayWithTargetSum3(array, 5);
console.log(result);
