function maxRunTime(n: number, batteries: number[]): number {
  const sum = batteries.reduce((acc, n) => (acc += n), 0);

  let left = 0;
  let right = Math.floor(sum / n);

  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);

    let available = 0;
    for (const b of batteries) {
      available += Math.min(b, mid);
    }

    if (available >= mid * n) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
