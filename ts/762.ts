function countPrimeSetBits(left: number, right: number): number {
  let acc = 0;
  const set = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);

  for (let i = left; i <= right; i++) {
    const bin = i.toString(2);
    let counter = 0;

    for (let j = 0; j < bin.length; j++) {
      if (bin[j] === "1") counter++;
    }

    if (set.has(counter)) acc++;
  }

  return acc;
}
