function rotateChar(char, rotation) {
  const code = char.charCodeAt(0);
  const isUppercase = code >= 65 && code <= 90; // A-Z
  const isLowercase = code >= 97 && code <= 122; // a-z
  const isAlpha = isUppercase || isLowercase;
  const isNumeric = code >= 48 && code <= 57; // 0-9
  const rotatedCode = code + rotation;
  if (isAlpha) {
    let newCode = -1;
    if (isUppercase) {
      // XYZ
      newCode =
        rotatedCode % 90 < 65 ? (rotatedCode % 90) + 65 : rotatedCode % 90;
      return String.fromCharCode(newCode);
    } else {
      // xyz
      newCode =
        rotatedCode % 90 < 65 ? (rotatedCode % 120) + 97 : rotatedCode % 120;
      return String.fromCharCode(newCode);
    }
  } else if (isNumeric) {
    newCode =
      rotatedCode % 90 < 57 ? (rotatedCode % 57) + 48 : rotatedCode % 57;
    return String.fromCharCode(newCode);
  } else {
    return char;
  }
}

function rotationalCipher(input, rotationFactor) {
  // Write your code here
  let str = "";
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    str += rotateChar(char, rotationFactor);
  }
  return str;
}

let input_1 = "All-convoYs-9-be:Alert1.";
let rotationFactor_1 = 4;
let output_1 = rotationalCipher(input_1, rotationFactor_1);
console.log(output_1, "Epp-gsrzsCw-3-fi:Epivx5.");
