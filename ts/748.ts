function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const word = licensePlate.replaceAll(/[^a-zA-Z]/g, "").toLowerCase();
  const map1 = new Map();
  const map2 = new Map();
  let ans = "123456789123456789";
  let canBe = false;

  for (const ch of word) {
    map1.set(ch, (map1.get(ch) ?? 0) + 1);
  }

  for (let i = 0; i < words.length; i++) {
    for (const ch of words[i]) {
      map2.set(ch, (map2.get(ch) ?? 0) + 1);
    }

    for (const key of map1.keys()) {
      if (map2.get(key) >= map1.get(key)) {
        canBe = true;
      } else {
        canBe = false;
        break;
      }
    }

    if (canBe && words[i].length < ans.length) {
      ans = words[i];
      canBe = false;
    }

    map2.clear();
  }

  return ans;
}
