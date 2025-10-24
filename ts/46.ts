// Problem Statement: https://leetcode.com/problems/permutations/description/

function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function permute(currentPermutation: number[], remainingElements: number[]) {
    if (remainingElements.length === 0) {
      result.push(currentPermutation);
      return;
    }

    for (let i = 0; i < remainingElements.length; i++) {
      const nextElement = remainingElements[i];
      const newRemaining = [
        ...remainingElements.slice(0, i),
        ...remainingElements.slice(i + 1),
      ];
      permute([...currentPermutation, nextElement], newRemaining);
    }
  }

  permute([], nums);
  return result;
}
