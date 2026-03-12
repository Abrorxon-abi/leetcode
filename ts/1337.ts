function kWeakestRows(mat: number[][], k: number): number[] {
  const map = new Map();
  let acc = 0;
  const ans = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) acc++;
    }
    map.set(i, acc);
    acc = 0;
  }

  for (let key of map.keys()) {
    ans.push(key);
  }

  ans.sort((a, b) => map.get(a) - map.get(b));

  return ans.slice(0, k);
}
