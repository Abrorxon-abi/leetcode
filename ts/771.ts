// Problem Statement: https://leetcode.com/problems/jewels-and-stones/description/

function numJewelsInStones(jewels: string, stones: string): number {
  const regExp = new RegExp("[" + jewels + "]", "g");

  return stones.match(regExp)?.length ?? 0;
}
