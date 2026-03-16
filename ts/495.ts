function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let acc = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    acc += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }

  return (acc += duration);
}
