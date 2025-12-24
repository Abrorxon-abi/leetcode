function minimumBoxes(apple: number[], capacity: number[]): number {
  const sum = apple.reduce((acc, n) => (acc += n), 0);
  capacity.sort((a, b) => b - a);
  let acc = 0;

  for (let i = 0; i < capacity.length; i++) {
    acc += capacity[i];
    if (acc >= sum) return i + 1;
  }

  return acc;
}
