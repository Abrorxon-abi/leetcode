// Problem Statement: https://leetcode.com/problems/reveal-cards-in-increasing-order/description/

function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((a, b) => a - b);
  const res: number[] = [];

  for (let i = deck.length - 1; i >= 0; i--) {
    if (res.length) {
      let lastElement = res.pop()!;

      res.unshift(lastElement);
    }
    res.unshift(deck[i]);
  }

  return res;
}
