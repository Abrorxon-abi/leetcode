function findClosest(x: number, y: number, z: number): number {
  if (Math.abs(z - x) === Math.abs(z - y)) return 0;
  return Math.abs(z - x) < Math.abs(z - y) ? 1 : 2;
}
