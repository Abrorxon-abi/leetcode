function destCity(paths: string[][]): string {
  const map = new Map();

  for (const [key, val] of paths) {
    map.set(key, val);
  }

  for (const val of map.values()) {
    if (!map.get(val)) return val;
  }

  return "";
}
