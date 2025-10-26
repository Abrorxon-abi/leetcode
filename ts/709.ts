// Problem Statement: https://leetcode.com/problems/to-lower-case/description/

function toLowerCase(s: string): string {
  let word = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let ascii = char.charCodeAt(0);
    if (ascii <= 90 && ascii >= 65) {
      word += String.fromCharCode(ascii + 32);
    } else {
      word += char;
    }
  }

  return word;
}
