/**
 * Problem:
 *  First Reoccurrences
 * Description:
 *  Given a string, return the first recurring character in it, or null if
 *  there is no recurring character. For example, given the string "acbbac",
 *  return "b". Given the string "abcdef", return null.
 * Approach:
 *  Iterate through each character in the words O(n)
 *  Track chars already seen in a hash map O(n)
 *  Check if each character has been seen before O(1)
 *  Store char if it has not been seen before O(1) -> O(n)
 *  If char has been seen before then return that char
 * Complexity:
 *  Time => O(n)
 *  Space => O(n)
 *
 * Comments:
 *
 * @param {string[]} chars list of characters
 * @return {string | null} the first character that repeats
 */

const reoccurrences = (chars) => {
  let occurrences = {};
  for (let i = 0; i < chars.length; i++) {
    const char = chars.charAt(i);
    if (!occurrences[char]) {
      occurrences[char] = 1;
    } else {
      return char;
    }
  }
  return null;
};

const chars1 = "acbbac";
const result1 = reoccurrences(chars1);
console.log(result1);

const chars2 = "abcdef";
const result2 = reoccurrences(chars2);
console.log(result2);
