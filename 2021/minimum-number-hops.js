const isAtTheEnd = (array, index) => {
  return array[index] >= array.length - 1 - index;
};

const minNumOfHops = (array) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const done = isAtTheEnd(array, i);
    if (done) return i + 1;
    let j = i + 1;
    while (j <= element + i) {
      const done = isAtTheEnd(array, j);
      if (done) return j;
      j++;
    }
  }
};

const array1 = [3, 2, 5, 1, 1, 9, 3, 4];
const result1 = minNumOfHops(array1);
console.log(result1);
const array2 = [3, 2, 5, 1];
const result2 = minNumOfHops(array2);
console.log(result2);
