function wordPattern(pattern: string, s: string): boolean {
  const arr = s.split(" ");

  if (pattern.length !== arr.length) return false;

  const map = new Map();
  const map2 = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i]) && !map2.has(arr[i])) {
      map.set(pattern[i], arr[i]);
      map2.set(arr[i], pattern[i]);
    } else {
      if (map.get(pattern[i]) !== arr[i] || map2.get(arr[i]) !== pattern[i])
        return false;
    }
  }

  return true;
}
