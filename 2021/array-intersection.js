const compareArrayLengths = (a, b) => {
  if (a.length > b.length) return 1;
  else if (a.length < b.length) return -1;
  else return 0;
};

const arrayIntersection = (a, b) => {
  const map = {};
  const output = [];
  let primary = a;
  let secondary = b;
  const result = compareArrayLengths(a, b);
  primary = result == -1 ? a : b;
  secondary = result == 1 ? a : b;
  for (let element of primary) {
    if (map[element] == undefined) {
      map[element] = 1;
    }
  }

  for (let element of secondary) {
    if (map[element]) {
      output.push(element);
      map[element] = 0;
    }
  }
  return output;
};

const a = [4, 9, 5];
const b = [9, 4, 9, 8, 4];
const result = arrayIntersection(a, b);
console.log(result);
