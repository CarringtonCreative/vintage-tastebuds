const sortWord = (word) => {
  let sortedWord = "";
  let charArray = [];
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    charArray.push(char);
  }

  charArray.sort();
  for (let i = 0; i < charArray.length; i++) {
    sortedWord += charArray[i];
  }
  return sortedWord;
};

const groupAnagrams = (words) => {
  const map = {};
  const output = [];
  for (let i = 0; i < words.length; i++) {
    let word = sortWord(words[i]);
    if (!map[word]) {
      map[word] = [];
    }
    map[word].push(i);
  }

  const values = Object.values(map);
  for (let i = 0; i < values.length; i++) {
    let subarray = [];
    const value = values[i];
    for (let j = 0; j < value.length; j++) {
      const index = value[j];
      subarray.push(words[index]);
    }
    output.push(subarray);
  }
  return output;
};

const words = ["abc", "bcd", "cba", "cbd", "efg"];
const result = groupAnagrams(words);
console.log(result);
