function concatenatedBinary(n: number): number {
  let binary = "";
  const MOD = BigInt(10 ** 9 + 7);

  for (let i = 1; i <= n; i++) {
    binary += i.toString(2);
  }

  const binaryResult = BigInt("0b" + binary);
  return Number(binaryResult % MOD);
}
