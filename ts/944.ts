function minDeletionSize(strs: string[]): number {
  let ans = 0;
  const arr = Array.from({ length: strs[0].length }, () => "");

  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      arr[j] += strs[i][j];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].split("").toSorted().join("");
    if (arr[i] !== sorted) ans++;
  }

  return ans;
}
