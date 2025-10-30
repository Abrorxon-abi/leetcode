function numWaterBottles(numBottles: number, numExchange: number): number {
  let acc = numBottles;

  while (numBottles >= numExchange) {
    numBottles -= numExchange;
    numBottles += 1;
    acc++;
  }

  return acc;
}
