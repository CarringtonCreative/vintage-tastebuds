/* 
  Problem: 
  Given an integer array nums, find the subarray with the largest sum,
  and return its sum.

  Example: 
  Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  Output: [4, -1, 2, 1] => 6

---

Walkthrough:
1. [-2] = -2 
2. [-2, 1] = 1 (new max)
3. [-2, 1, -3] = -4
4. [1, -3] = -2
5. [1, -3, 4] = 2 (new max) 
6. [1, -3, 4, -1] = 1
7. [-3, 4, -1] = 0
8. [4, -1] = 3 (new max)
9. [4, -1, 2] = 5 (new max)
10. [4, -1, 2, 1] = 6 (new max)
11. [4, -1, 2, 1, -5] = 1
12. [-1, 2, 1, -5] = -3
13. [2, 1, -5] = -2
14. [2, 1, -5, 4] = 2
15. [1, -5, 4] = 0
16. [-5, 4] = -1
17. [4] = 4

---

Initial Approach:
1. Use two pointers (i and j) to track the start and end of the subarray.
2. Calculate the sum of the current subarray.
3. If the current sum > max sum, update the max sum.
4. If the current sum > previous sum, expand the right pointer (j++).
5. If the current sum < previous sum, contract the left pointer (i++).
6. Return the maximum subarray sum.

Time Complexity: O(n)
Space Complexity: O(1)

---

Reflection:
I spent too much time coding without clearly defining the algorithm in pseudocode first. Drawing or visualizing the algorithm might have helped clarify my approach before implementing the solution. I should also focus on handling only the three key scenarios (expand right, contract left, or update max sum) to streamline my thought process.

*/

class MaximumSubarray {
  constructor(nums) {
    this.nums = nums || [];
  }

  solve() {
    let i = 0;
    let j = 1;
    let previousSum = this.nums[0]; // Initialize with the first element
    let maxSum = this.nums[0]; // Initialize max sum with the first element

    while (i <= j && j <= this.nums.length - 1) {
      let newSum = previousSum + this.nums[j]; // Calculate new subarray sum
      if (newSum > maxSum) {
        maxSum = newSum; // Update max sum if the new sum is larger
      }
      if (newSum < previousSum) {
        // Contract the left pointer if the new sum is smaller
        previousSum = previousSum - this.nums[i];
        i++;
      } else if (newSum > previousSum) {
        // Expand the right pointer if the new sum is larger
        previousSum = newSum;
        j++;
      }
    }
    return maxSum;
  }
}

// Test case
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSubarray = new MaximumSubarray(nums);
let result = maxSubarray.solve();
console.log(result); // Expected Output: 6

/* 

Lessons Learned:

What I did well:
- I correctly used a sliding window approach with two pointers to attempt optimizing the subarray search.

What I could improve:
- I should have solved the problem in pseudocode first to avoid spending unnecessary time on trial and error during implementation.
- Visualizing the problem, such as with a drawing, could have helped clarify the subarray expansions and contractions.

Key Mistakes:
- I didn’t fully conceptualize the expanding/contracting logic before implementing it.
- I spent too much time coding instead of thinking through the problem more clearly at the start.

Next Steps:
- Practice breaking down the problem in pseudocode first and focus on understanding the algorithm before jumping into coding.
- Practice solving similar problems to improve speed and efficiency.

GPT Tips:
- The main issue is that the current algorithm is trying to expand and contract the subarray dynamically, which is more complex than needed for this problem.
- Kadane's Algorithm, which is the optimal solution, only tracks whether the current sum is positive or negative and either continues adding elements or resets the sum if the current sum becomes negative.

*/
