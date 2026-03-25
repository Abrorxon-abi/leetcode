function sumBase(n: number, k: number): number {
  const digits = n.toString(k);
  let acc = 0;

  for (let ch of digits) {
    acc += Number(ch);
  }

  return acc;
}
