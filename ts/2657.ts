function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const a = new Set([]);
  const b = new Set([]);
  const ans = [];

  for (let i = 0; i < A.length; i++) {
    a.add(A[i]);
    b.add(B[i]);
    ans.push(Array.from(a).filter((x) => b.has(x)).length);
  }

  return ans;
}
