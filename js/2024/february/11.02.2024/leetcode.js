/**
 * @param {number[][]} grid
 * @return {number}
 */

var cherryPickup = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const memo = new Array(rows)
    .fill(null)
    .map(() =>
      new Array(cols).fill(null).map(() => new Array(cols).fill(null))
    );

  const getMaxCherries = (r1, c1, c2) => {
    if (r1 === rows || c1 < 0 || c1 === cols || c2 < 0 || c2 === cols) {
      return 0;
    }

    if (memo[r1][c1][c2] !== null) {
      return memo[r1][c1][c2];
    }

    let cherries = grid[r1][c1];
    if (c1 !== c2) {
      cherries += grid[r1][c2];
    }

    let maxCherries = 0;
    for (let nc1 = c1 - 1; nc1 <= c1 + 1; nc1++) {
      for (let nc2 = c2 - 1; nc2 <= c2 + 1; nc2++) {
        maxCherries = Math.max(maxCherries, getMaxCherries(r1 + 1, nc1, nc2));
      }
    }

    memo[r1][c1][c2] = cherries + maxCherries;
    return memo[r1][c1][c2];
  };

  return getMaxCherries(0, 0, cols - 1);
};
