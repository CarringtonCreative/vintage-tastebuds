/* 

Problem: Given an integer array nums and an integer k, return the k most 
frequent elements. You may return the answer in any order. Elements are
not necessarily in sorted order.

Example: nums = [1, 1, 1, 2, 2, 3], k = 2 => [1, 2]

---

Approach 1: Linear pass to calculate each frequency using a hash map.
- Time Complexity: O(n)
- Space Complexity: O(n)

Approach 2: Sort the list and then calculate frequencies.
- Time Complexity: O(n log n)
- Space Complexity: O(1)

Question: Do we want to optimize time or space? I think Approach 1 is more efficient and straightforward.

---

Initial Thoughts:
- Sorting doesn't give a real advantage here.
- I didn't initially give enough thought to the core algorithm (i.e., how to efficiently find the top k frequencies).
- Thought about using a max heap or stack for this.

---

Max Stack Idea:
- Peek at the stack; if empty, push the new element.
- If the new element's frequency is greater than the top, push it; otherwise, pop and compare until an element's frequency is greater.
- At the end, pop the stack's top k values.
*/

class TopKFrequent {
  constructor(k, nums) {
    this.k = k;
    this.nums = nums;
  }

  // Step 1: Process the frequencies of each element
  processFrequencies() {
    let frequencies = {};
    for (let i = 0; i < this.nums.length; i++) {
      const element = this.nums[i];
      frequencies[element] = (frequencies[element] || 0) + 1;
    }
    return frequencies;
  }

  find() {
    const stack = [];
    const store = [];
    const output = [];
    const frequencies = this.processFrequencies();
    const keys = Object.keys(frequencies);

    // Step 2: Iterate over the frequencies and use a stack to sort based on frequency
    for (let key of keys) {
      const element = { key, frequency: frequencies[key] };
      let topElement = stack.pop();

      // Maintain elements in the stack based on frequency
      if (topElement && topElement.frequency === element.frequency) {
        stack.push(topElement);
      } else {
        while (topElement && topElement.frequency > element.frequency) {
          store.push(topElement);
          topElement = stack.pop();
        }
      }
      stack.push(element);

      // Reinsert the stored elements back into the stack
      let topStoreElement = store.pop();
      while (topStoreElement) {
        stack.push(topStoreElement);
        topStoreElement = store.pop();
      }
    }

    // Step 3: Pop off the top k elements from the stack
    let i = 0;
    while (i < this.k) {
      const element = stack.pop();
      if (element) output.push(element.key);
      i++;
    }

    return output;
  }
}

// Test Cases
let k = 2;
let nums = [1, 1, 1, 2, 2, 3];
let solution = new TopKFrequent(k, nums);
let result = solution.find();
console.log(result); // Expected Output: [1, 2]

k = 3;
nums = [2, 2, 2, 9, 9, 1, 0, 43, 43, 43, 7, 7, 1];
solution = new TopKFrequent(k, nums);
result = solution.find();
console.log(result);

k = 3;
nums = [5, 3, 1, 1, 1, 3, 5, 73, 1];
solution = new TopKFrequent(k, nums);
result = solution.find();
console.log(result);

/* 
Lessons Learned:

What I did well:
- Correctly preprocessed the data by creating a frequency hash map, which optimized the lookup.

What I could improve:
- I could have used a better data structure such as a min/max heap, which would have made finding the k most frequent elements more efficient.
- Practice implementing and using heaps in similar problems for future optimization.

Key Mistakes:
- Initially forgot to declare fields and the `new` keyword when instantiating the class.
- Misused a `for in` loop to iterate over object keys; should have used `for of`.
- Overthought the problem at times and spent too much time on solving rather than refining the approach.
*/
