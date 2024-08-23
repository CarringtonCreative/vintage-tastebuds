


/**
For the sake of this problem, our truncation algorithm is as follows:
Let X be the max amount of times a string is allowed to appear.
For each string:
If the string appears > X times, truncate the list so that string appears exactly X times.
If the string appears <= X messages, do not truncate that string out of the list.

*/


/**
Maintain the same (and highest possible) limit across every string.

I.E If a string A appears 4 times, I must truncate all the other strings to appear 4 or less times. If a string B appears more than 4 times, it must be truncated to be 4.

If a string A appears X times, I must truncate all the other strings to appear X or less times. If a string B appears more than X times, it must be truncated to be X.

*/

// [ “A”, “B”, “B”, “C”, “A”, “A”]

// With outputListSize = 5 (We want our output list to be of size 3 or less)



// ABC, 5
// C:1,B:2,A:3
// C, BB, AA
// 5-1, 4-2, 2-2 = 0

// ABC, 4
// C:1, B:2, A:3
// 5-1,4-2, 2-2

// outputListSize = 3
// [ “A”, “B”, “B”, “C”, “A”, “A”]
// # of Keys
// A's-# of keys, B, C

// [ “A”, “A”, “A”, “B”, “B”, “C”], 5


// max = 1
// {A, B, C}
// A, B, C

/** 
 * @param{Array<string>} inputList
 * @param{number} outputListSize
 * @returns{Array<string>}
 */
function TruncateStrings(inputList, outputListSize) {
  const output = [];
  const map = [];
  
  for(let i=0; i< inputList; i++) {
    if(!inputList[i]){
     map[i] = 1;

    }
    map[i]++;
  }
  
  inputList = inputList.sort();
  
  let min = 1;
  
  
  
  return output;

}

// [ “A”, “A”, “A”, “B”, “B”, “C”], 5
/** 
 * Verson 2
 * @param{Array<string>} inputList
 * @param{number} outputListSize
 * @returns{Array<string>}
 */
function TruncateStrings(inputList, outputListSize) {
  const output = [];
  const map = [];
  
  // O(n)
  for(let i=0; i< inputList; i++) {
    if(!inputList[i]){
     map[i] = 1;

    }
    map[i]++;
  }
  
  // O(n log n)
  inputList = inputList.sort(b > a);
  
  
  // m = min # of occurences of most occuring string
  // O(n * m)
  // AAAAAA, BB, C 
  
  let prevElement = null;
  let i = 0;
  while(output < outputListSize) {
    const a = inputList[i];
    if(map[a] > 0 || a != prevElement) {
      output.push(a);
      prevElement = a;
      map[a] = map[a] - 1;
    } 
    if(i == inputList.lenght-1) {
      i = 0
    } else {
      i++;
    }
  }
  
  
  
  return output;

}


// [ “A”, “A”, “A”, “B”, “B”, “C”], 5
/** 
 * Verson 3
 * @param{Array<string>} inputList
 * @param{number} outputListSize
 * @returns{Array<string>}
 */
function TruncateStrings(inputList, outputListSize) {
  const output = [];
  const map = [];
  
  // O(n log n)
  inputList = inputList.sort(b > a);

  // O(n)
  for(let i=0; i< inputList; i++) {
    if(!inputList[i]){
     map[i] = {freq: 0, index: i};
    }
    map[i][freq]++;
  }
  
  const keys = Object.keys(map);
  
  let min = 
  for(let key of keys) {
    // get freq
    
  }
  
  
  // m = min # of occurences of most occuring string
  // O(n * m)
  // AAAAAA, BB, C 
  
  let prevElement = null;
  let i = 0;
  while(output < outputListSize) {
    const a = inputList[i];
    if(map[a] > 0 || a != prevElement) {
      output.push(a);
      prevElement = a;
      map[a] = map[a] - 1;
    } 
    if(i == inputList.lenght-1) {
      i = 0
    } else {
      i++;
    }
  }
  
  
  
  return output;

}
