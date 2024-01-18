// 0, 1, 1, 2, 3, 5, 8, 13
// Time Complexity: 2^N
// Space Complexity: Linear (stack depth)
const fibonacci = (n) => {
  // 2^n time complexity
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

let n = 3;
let result = fibonacci(n);
console.log(result);

n = 5;
result = fibonacci(n);
console.log(result);

// 0, 1, 1, 2, 3, 5, 8, 13
// Time Complexity: linear
// Space Complexity: constant
const fibonacci2 = (n) => {
  if (n == 0) return 0;
  if (n == 1) return 1;

  let lastSum = 1;
  let sum = 1;
  for (let i = 2; i < n; i++) {
    const newSum = lastSum + sum;
    lastSum = sum;
    sum = newSum;
  }
  return sum;
};

n = 3;
result = fibonacci2(n);
console.log(result);

n = 5;
result = fibonacci2(n);
console.log(result);

// i:0, 0
// i:1, 0 + 1 = 1
// i:2, 1 + 1 = 2
// i:3, 2 + 1 = 3
// i:4, 3 + 2 = 5

// i:3 -> v:2
// 2 1
// 1 + 0 + 1
// 2

// i:5 -> v:5
// 4 + 3
// 3 + 2 | 2 + 1
// 2 + 1, 1 + 0 | 1 + 0 , 1
// 1 + 0, 1, 1| 1 + 1
// 3 + 2 = 5
