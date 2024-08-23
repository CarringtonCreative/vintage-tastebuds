const maxSubarray = (array) => {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    if (sum <= 0 && number > sum) {
      sum = number;
    } else if (sum + number > 0) {
      sum += number;
      if (sum > maxSum) {
        maxSum = sum;
      }
    } else {
      sum = 0;
    }
  }

  return maxSum;
};

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const array2 = [-1, -4, 3, 8, 1];

const result = maxSubarray(array);
console.log(result);
const result2 = maxSubarray(array2);
console.log(result2);
