// Problem Statement: https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

function reverseWords(s: string): string {
  const reverSed = [];

  for (let word of s.split(" ")) {
    reverSed.push(word.split("").reverse().join(""));
  }

  return reverSed.join(" ");
}
