function countCompleteDayPairs(hours: number[]): number {
  let acc = 0;

  for (let i = 0; i < hours.length - 1; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 == 0) acc++;
    }
  }

  return acc;
}
