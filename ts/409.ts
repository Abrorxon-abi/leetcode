function longestPalindrome(s: string): number {
  const map = new Map();
  let acc = 0;
  let hasOdd = false;

  for (const ch of s) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  for (const val of map.values()) {
    if (val % 2 === 0) {
      acc += val;
    } else {
      acc += val - 1;
      hasOdd = true;
    }
  }

  return hasOdd ? acc + 1 : acc;
}
