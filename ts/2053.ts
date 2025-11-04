function kthDistinct(arr: string[], k: number): string {
  let obj = {};
  for (let c of arr) {
    obj[c] = (obj[c] || 0) + 1;
  }

  let keysArr = Object.keys(obj);

  return keysArr.filter((c) => obj[c] === 1).length >= k
    ? keysArr.filter((c) => obj[c] === 1)[k - 1]
    : "";
}
