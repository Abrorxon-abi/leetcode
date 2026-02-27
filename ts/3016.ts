function minimumPushes(word: string): number {
  const map = new Map<string, number>();
  const sortedArr = [];
  let acc = 0;
  let round = 1;
  let seven = 7;

  for (let ch of word) {
    if (!map.get(ch)) {
      map.set(ch, 1);
    } else {
      map.set(ch, map.get(ch)! + 1);
    }
  }

  for (let val of map.values()) {
    sortedArr.push(val);
  }

  sortedArr.sort((a, b) => b - a);

  for (let i = 0; i < sortedArr.length; i++) {
    acc += sortedArr[i] * round;
    if (seven === 0) {
      round++;
      seven = 7;
    } else {
      seven--;
    }
  }

  return acc;
}
