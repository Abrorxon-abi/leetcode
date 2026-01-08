function mirrorDistance(n: number): number {
  const reverseInt = parseInt(n.toString().split("").reverse().join(""));
  return Math.abs(n - reverseInt);
}
