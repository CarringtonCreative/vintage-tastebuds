/* 
  Problem: 
  Given an integer array nums and an integer k, return true if there are two 
  distinct indices i and j in the array such that nums[i] == nums[j] and 
  abs(i - j) <= k.

Example: 
nums = [2, 5, 7, 2], k = 3 => abs(0 - 3) = 3 => true

---

Initial Approach:
1. Make a linear pass through the array.
2. For each element at index i, check all elements up to index i + k.
3. If a duplicate is found, calculate the absolute difference of their indices.
4. If abs(i - j) <= k, return true. Otherwise, keep checking until j reaches i + k.
5. If no duplicates are found, continue iterating until the end.

Time Complexity: O(n) * O(k)
Space Complexity: O(1)

---

Optimal Approach:
1. Make a linear pass while storing elements and their indices in a hash map.
2. As you encounter duplicates, check their index difference using the stored value in the hash map.
3. If abs(i - j) <= k, return true.
4. Time Complexity: O(n)
5. Space Complexity: O(n)

---

Key Questions:
- How many duplicates can I expect?
- Are duplicates in pairs or in series?
- Is there one set of duplicates or multiple sets?

---

Reflections:
When solving problems, it’s important to ask clarifying questions upfront. This helps frame the problem correctly and ensures you're addressing the right scenario. Reviewing test cases can further clarify edge cases and expected outputs. 

In this problem, I made several assumptions about the duplicates, which impacted how I approached the solution. It’s important to clearly understand the problem’s requirements before jumping to the implementation.
*/

class ContainsDuplicatesTwo {
  constructor(k, nums) {
    this.k = k;
    this.nums = nums || [];
  }

  optimal() {
    const duplicates = {}; // Hash map to track element indices
    for (let i = 0; i < this.nums.length; i++) {
      const element = this.nums[i];
      if (duplicates[element] === undefined) {
        duplicates[element] = i; // Store the index of the element
      } else {
        if (Math.abs(duplicates[element] - i) <= this.k) {
          return true; // Found a pair with abs(i - j) <= k
        } else {
          duplicates[element] = i; // Update index to the latest occurrence
        }
      }
    }
    return false;
  }

  alternative() {
    const duplicates = {};
    for (let i = 0; i < this.nums.length; i++) {
      const element = this.nums[i];
      const bucket = duplicates[element];
      if (bucket === undefined) {
        duplicates[element] = [i]; // Store the index in an array for each element
      } else {
        for (let j = 0; j < bucket.length; j++) {
          const duplicate = bucket[j];
          if (Math.abs(duplicate - i) <= this.k) {
            return true; // Found a valid pair
          }
        }
        duplicates[element].push(i); // Add the new occurrence to the array
      }
    }
    return false;
  }

  suboptimal() {
    // Brute force approach: Check each element with others within range k
    for (let i = 0; i < this.nums.length; i++) {
      for (let j = i + 1; j <= i + this.k && j < this.nums.length; j++) {
        if (this.nums[i] === this.nums[j]) {
          return true; // Found a pair of duplicates
        }
      }
    }
    return false;
  }
}

// Test Cases

let k = 3;
let nums = [2, 5, 7, 2];
let containsDuplicates = new ContainsDuplicatesTwo(k, nums);
console.log(containsDuplicates.optimal()); // Expected: true

k = 1;
nums = [1, 0, 1, 1];
containsDuplicates = new ContainsDuplicatesTwo(k, nums);
console.log(containsDuplicates.alternative()); // Expected: true

k = 2;
nums = [1, 2, 3, 1, 2, 3];
containsDuplicates = new ContainsDuplicatesTwo(k, nums);
console.log(containsDuplicates.suboptimal()); // Expected: false

/* 

Lessons Learned:

What I did well:
- I correctly recognized that using a hash map was optimal for tracking the indices of elements.

What I could improve:
- I should have considered different data structures like sets or heaps for other possible implementations.
- I spent time on suboptimal approaches (e.g., brute force), which could have been avoided with clearer understanding of the problem.

Key Mistakes:
- Forgot to declare variables like the hash map before the loop.
- Misused equality checks in certain conditions.
- Should have asked more clarifying questions to frame the problem better before implementation.

Additional Notes:
- Adjust your workspace ergonomics (keyboard position) for better comfort and efficiency.
*/
