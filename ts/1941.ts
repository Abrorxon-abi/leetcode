function areOccurrencesEqual(s: string): boolean {
  const map = new Map<string, number>();

  for (const ch of s) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  const [_, firstValue] = map.entries().next().value!;

  for (const val of map.values()) {
    if (val != firstValue) return false;
  }

  return true;
}
