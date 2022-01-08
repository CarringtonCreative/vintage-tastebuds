const findMinIndex = (array) => {
  let minIndex = 0;
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  return minIndex;
};

const findMaxIndex = (array) => {
  let maxIndex = 0;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};

// 3, 7, 5, 6, 9 => 1, 3

// 3, 5, 7, 6, 9 => 2, 3

const getLeftBound = (array) => {
  let leftBound = 0;
  let lastMin = array[1]; // 5
  let minIndex = findMinIndex(array);
  if (minIndex !== 0) return leftBound;
  for (let i = 2; i < array.length; i++) {
    let current = array[i]; // 7; 6
    if (current < lastMin) {
      // 7 < 5; 6 < 5;
      lastMin = current;
      leftBound = i - 1;
      return leftBound;
    } else {
      leftBound = i; // 2;
    }
  }
  return leftBound;
};

const sortWindow = (array) => {
  let leftBound = getLeftBound(array);
  let rightBound = array.length - 1;
  return [leftBound, rightBound];
};

const array = [3, 7, 5, 6, 9];
const result = sortWindow(array);
console.log(result);

/* for (let i = 2; i < array.length; i++) {
  let current = array[i];
  if (current < lastMin) {
    leftBound = i - 1;
  }
} */
