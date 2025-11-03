function reversePrefix(word: string, ch: string): string {
  let arr = word.split("");
  let idx = arr.indexOf(ch);
  let firstPart = arr.slice(0, idx + 1);
  let secondPart = arr.slice(idx + 1);
  return [...firstPart.reverse(), ...secondPart].join("");
}
