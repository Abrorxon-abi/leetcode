function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let acc = numBottles;

  while (numBottles >= numExchange) {
    numBottles -= numExchange;
    numBottles += 1;
    numExchange++;
    acc++;
  }

  return acc;
}
