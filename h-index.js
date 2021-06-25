/**
 * Problem:
 *  H Index
 * Description:
 *  Get the h index for the number of times a publication is sited. An h index
 *  is when the number of papers cited is equal to the number of citations.
 * Approach:
 *  Sort the list of papers in descending order.
 *  Iterate the list
 *  If i is greater than the number of citations for that paper at the i
 *      then return index i
 * Complexity:
 *  Time => O(nlogn + n) => O(nlogn): Increased complexity with sorting
 *  Space => O(1): No extra space is allocated
 *
 * Comments:
 *
 * @param {numbers[]} array citations is a list of papers and their corresponding citations
 * @return {number}
 */

const preprocessCitations = (citations) => {
  citations.sort((a, b) => b - a);
};

const getHIndex = (citations) => {
  preprocessCitations(citations);
  let i = 0;
  let citation = citations[0];
  while (citation >= i) {
    citation = citations[i];
    if (citation < i) return i;
    i++;
  }
  return i;
};

const papers1 = [0];
const result1 = getHIndex(papers1);
console.log(papers1, result1);

const papers2 = [1, 2, 0];
const result2 = getHIndex(papers2);
console.log(papers2, result2);

const papers3 = [1, 2, 0, 1, 3];
const result3 = getHIndex(papers3);
console.log(papers3, result3);

const papers4 = [3, 5, 0, 1, 3];
const result4 = getHIndex(papers4);
console.log(papers4, result4);

const papers5 = [5, 4, 4, 1, 7];
const result5 = getHIndex(papers5);
console.log(papers5, result5);
