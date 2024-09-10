class TwoSumSolution {
  target;
  store;
  numbers;

  constructor(target, store, numbers) {
    this.target = target || null;
    this.store = store = {};
    this.numbers = numbers || [];
  }

  solve() {
    if (this.target == null || this.target == undefined) return [];

    // preprocess
    for (let i = 0; i < this.numbers.length; i++) {
      const value = this.numbers[i];
      this.store[value] = i;
    }

    this.numbers.sort();
    let i = 0;
    let j = 1;
    while (i !== j) {
      const a = this.numbers[i];
      const b = this.numbers[j];
      const sum = a + b;
      if (sum == this.target) {
        let k = this.store[a];
        let l = this.store[b];
        return [k, l];
      } else if (j >= this.numbers.length) {
        i++;
        j = i + 1;
      } else {
        j++;
      }
    }
    return [];
  }

  optimal() {
    for (let i = 0; i < this.numbers.length; i++) {
      // [1, 1, 1, 1], 2
      // [2, 7, 11, 15], 18
      const element = this.numbers[i];
      const value = this.store[element];
      if (value != undefined) {
        return [value, i]; // [1, 2]
      } else {
        let difference = this.target - element;
        this.store[difference] = i; // {16: 0, 11: 1}
      }
    }
    return [];
  }

  alt() {
    for (let i = 0; i < this.numbers.length; i++) {
      const element = this.numbers[i];
      this.store[element] = i;
      const difference = this.target - element;
      if (this.store[difference] != null) return [this.store[difference], i];
    }
  }
}

function main() {
  let target = 18;
  let store = {};
  let numbers = [2, 7, 11, 15];

  let twoSum = new TwoSumSolution(target, store, numbers);
  let result = twoSum.solve();
  console.log("Solution:", result);

  target = 18;
  store = {};
  numbers = [2, 7, 11, 15];

  twoSum = new TwoSumSolution(target, store, numbers);
  result = twoSum.optimal();
  console.log("Optimal:", result);

  target = 18;
  store = {};
  numbers = [2, 7, 11, 15];

  twoSum = new TwoSumSolution(target, store, numbers);
  result = twoSum.alt();
  console.log("Alternative:", result);
}

main();

/* Notes:
1. Approach:
  - Sort the array (O(N log N)).
  - Use a hash map to store the differences between target and each element.
  - Loop through the array and check if any element matches a previously stored difference.

2. Consider edge cases:
  - What if a number is negative?
  - What if both numbers are at opposite ends? E.g., [-1, 0, 1, 2], target = 1 => [1, 2].
  - What if both numbers are next to each other?

3. Mistakes made:
  - Forgot how to write a class in JavaScript.
  - Forgot to instantiate the class with the `new` keyword.
  - Didn't call the `solve` method initially.
  - Left in old code after making changes.
  - Confused by array sorting behavior (`sort()` mutates the array).
  - Used a `for` loop instead of a `while` loop for windowing.
  - Assumed target 0 should return an empty array (but [-18, 18] would return a valid pair).
  - Failed to account for cases where the target is greater than any possible sum or less than any possible sum.
  - Duplicate numbers could return a larger index due to storing all occurrences in the hash map.
  - Didn't break the loop after finding a matching pair.
  - Forgot to use the `this` keyword when calling class properties.

4. Hash map logic:
  - For each element, store the difference between the target and the element in a hash map.
  - If the element already exists in the hash map, the previous element plus the current one sums to the target.
  
5. Brute force approach:
  - O(N^2) time complexity: Loop through the array, comparing each element with every other element.
  - Optimal linear pass approach: O(N) time with a hash map to store differences.

6. Example walk-through:
  - Array: [2, 7, 11, 15], Target: 18
  - Differences: 
    18 - 2 = 16 (store 16: index 0)
    18 - 7 = 11 (store 11: index 1)
    18 - 11 = 7 (match found with index 1)
    18 - 15 = 3
  - Result: [1, 2]

7. Conclusion:
  - Brute force method is suboptimal.
  - Hash map is efficient and allows inline checking and comparing.
  - Use sorting when needed but optimize with a hash map for linear passes.
*/
