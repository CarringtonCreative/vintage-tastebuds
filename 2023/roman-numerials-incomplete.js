// IX -> 9
// IV -> 4
// IIV -> 3
// VI -> 6
// VII -> 7
// MCMIV -> 1904
//

const NUMERIALS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const getDecimal = (numerial) => {
  return NUMERIALS[numerial];
};

const romanNumerialToDecimal = (numerial) => {
  let direction = 0;
  let i = numerial.length - 1;
  let decimal = NUMERIALS[numerial.charAt(i)];
  if (numerial.length === 1) {
    return decimal;
  }

  console.log("decimal", decimal);

  // MCMIV -> 1904 | 5 - 1 + 1000 - 100 + 1000
  // MIV -> 1000 + 4 = 1004
  while (i > 0) {
    let a = numerial.charAt(i);
    let b = numerial.charAt(i - 1);
    console.log("i", i, "a", a, "b", b);
    console.log("getDecimal(numerial, a)", getDecimal(a));
    console.log("getDecimal(numerial, b)", getDecimal(b));

    if (getDecimal(a) == getDecimal(b)) {
      decimal += getDecimal(b);
    } else if (getDecimal(a) > getDecimal(b)) {
      decimal -= getDecimal(b);
    } else if (getDecimal(a) < getDecimal(b)) {
      decimal += getDecimal(b);
    }
    i--;
  }
  return decimal;
};

let numerial = "IIV";
let result = romanNumerialToDecimal(numerial);
console.log(result);

// case numerial < numerial
// case numerial > numerial
// case numerial == numerial
// iterating from left to right

// I: 1
// V: 5
// X: 10
// L: 50
// C: 100
// D: 500
// M: 1000
