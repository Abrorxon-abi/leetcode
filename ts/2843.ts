function countSymmetricIntegers(low: number, high: number): number {
  let acc = 0;

  for (let i = low; i <= high; i++) {
    const s = i.toString();
    if (s.length % 2 === 0) {
      let len = s.length;
      const half = len / 2;
      let left = s.slice(0, half);
      let right = s.slice(half);

      let leftSum = left.split("").reduce((acc, n) => (acc += Number(n)), 0);
      let rightSum = right.split("").reduce((acc, n) => (acc += Number(n)), 0);
      if (leftSum === rightSum) acc++;
    }
  }

  return acc;
}
