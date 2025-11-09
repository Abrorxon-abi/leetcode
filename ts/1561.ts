function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);
  let acc = 0;
  const arr = [];

  while (piles.length != 0) {
    arr.push(piles.pop());
    arr.push(piles.pop());
    arr.push(piles.shift());
  }

  for (let i = 1; i < arr.length; i += 3) {
    acc += arr[i];
  }

  return acc;
}
