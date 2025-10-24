// Problem Statement: https://leetcode.com/problems/length-of-last-word/description/

function lengthOfLastWord(s: string): number {
  return s.trim().split(" ").pop().length;
}
