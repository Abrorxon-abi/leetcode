// Problem Statement: https://leetcode.com/problems/length-of-last-word/description/

function lengthOfLastWord(s: string): number {
  const words = s.trim().split(" ");
  const lastWord = words.pop();
  return lastWord ? lastWord.length : 0;
}
