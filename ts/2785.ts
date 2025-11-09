function sortVowels(s: string): string {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const vwlsInStr = [];
  let newStr = [...s];
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vwlsInStr.push(s.charCodeAt(i));
    }
  }

  vwlsInStr.sort((a, b) => a - b);

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      newStr[i] = String.fromCharCode(vwlsInStr[counter]);
      counter += 1;
    }
  }

  return newStr.join("");
}
