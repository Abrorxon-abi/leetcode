function maximumHappinessSum(happiness: number[], k: number): number {
  let acc = 0;
  happiness.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    if (happiness[i] - i >= 0) {
      acc += happiness[i] - i;
    }
  }
  return acc;
}
