function minLengthAfterRemovals(s: string): number {
  const map = new Map<string, number>();

  for (const ch of s) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  const countA = map.get("a") ?? 0;
  const countB = map.get("b") ?? 0;

  return Math.abs(countA - countB);
}
