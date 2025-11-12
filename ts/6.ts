function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const ans: string[][] = [];
  let currentRow = 0;
  let goingDown = true;

  for (let i = 0; i < numRows; i++) {
    ans.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    if (currentRow === 0) {
      goingDown = true;
    } else if (currentRow === numRows - 1) {
      goingDown = false;
    }

    ans[currentRow].push(s[i]);
    currentRow += goingDown ? 1 : -1;
  }

  return ans.map((row) => row.join("")).join("");
}
