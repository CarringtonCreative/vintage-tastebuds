/**
 * Problem:
 *  Smallest Boats Required To Save Codeville
 *
 * Description:
 *  An imminent hurricane threatens the coastal town of Codeville. If at most
 *  two people can fit in a rescue boat, and the maximum weight limit for a
 *  given boat is k, determine how many boats will be needed to save everyone.
 *  For example, given a population with weights [100, 200, 150, 80] and a boat
 *  limit of 200, the smallest number of boats required will be three.
 *
 * Approach:
 *  - Iterate through the weights
 *  - If a weight is over the weight limit per boat then break it up into chunks
 *  (of at most the max weight limit).
 *  Sort weight in ascending order
 *  - Iterate through the weights
 *  - Bundle up the smaller weights first
 *  - Allocate a running weight total that captures remaining weights
 *  - If a weight is equal to the weight limit then increment the number of boats
 *  - If a weight is less than the weight limit
 *    - Check if it can be added to the running weight total
 *      - If it can add it to the running weight total
 *      - If it cannot then increment the number of boats and save the weight
 *        as the running total
 *  - Check if there are any remaining weights
 *  - Return number of boats neeeded
 *
 * Complexity:
 *  Time => O(n * m + nlogn + n) => nlogn, where n is the number of elements
 *   and m is the number of elements that need to be broken down into chunks.
 *   The sorting algorithm blows this solution up to O(nlogn). Ideally this
 *   problem should be solved without using it.
 *  Space => O(n+m) => storing each element plus the total number of chunks
 *
 * Comments:
 *  I am sure this algorithm can be improved, i.e. avoid using the sorting
 *  algorithm. In exchange for faster time more space could be used to store
 *  weigth compliements.
 *
 * @param {number[]} array A list of weights of populations
 * @param {number} number A weight limit for each boat
 * @return {number} The number of boats needed to save Codeville
 */

const divideWeightIntoChunks = (weight, limit) => {
  const chunks = [];
  let chunk = weight;
  while (chunk > limit) {
    chunk = chunk - limit;
    chunks.push(limit);
    if (chunk <= limit) {
      chunks.push(chunk);
    }
  }
  return chunks;
};

const dividePopulationIntoChunks = (weights, limit) => {
  let result = [];
  for (let weight of weights) {
    if (weight > limit) {
      const chunks = divideWeightIntoChunks(weight, limit);
      result = Object.assign([], [...result, ...chunks]);
    } else {
      result.push(weight);
    }
  }
  return result;
};

const getNumberOfBoats = (weights, limit) => {
  weights = dividePopulationIntoChunks(weights, limit);
  weights.sort((a, b) => a - b);
  let numberOfBoats = 0;
  let runningWeightTotal = 0;
  for (let weight of weights) {
    if (weight == limit) {
      numberOfBoats++;
    } else {
      const runningWeight = runningWeightTotal + weight;
      if (runningWeight < limit) {
        runningWeightTotal += weight;
      } else if (runningWeight > limit) {
        runningWeightTotal = weight;
        numberOfBoats++;
      } else if (runningWeight == limit) {
        runningWeightTotal = 0;
        numberOfBoats++;
      }
    }
  }
  if (runningWeightTotal) {
    numberOfBoats++;
  }
  return numberOfBoats;
};

const limit = 200;
const weights = [100, 200, 150, 80];
const numberOfBoats = getNumberOfBoats(weights, limit);
console.log(numberOfBoats);
