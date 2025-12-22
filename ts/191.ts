function hammingWeight(n: number): number {
  let binary = n.toString(2);
  return binary.split("").filter((n) => n === "1").length;
}
