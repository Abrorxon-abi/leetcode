/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */

var findPaths = function (m, n, maxMove, startRow, startColumn) {
    const MOD = 10 ** 9 + 7;
    let dp_prev = Array.from({ length: m }, () => Array(n).fill(0));
    dp_prev[startRow][startColumn] = 1;
    let result = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let move = 1; move <= maxMove; move++) {
        let dp_curr = Array.from({ length: m }, () => Array(n).fill(0));

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                for (const d of directions) {
                    const ni = i + d[0];
                    const nj = j + d[1];

                    if (ni < 0 || ni >= m || nj < 0 || nj >= n) {
                        result = (result + dp_prev[i][j]) % MOD;
                    } else {
                        dp_curr[ni][nj] = (dp_curr[ni][nj] + dp_prev[i][j]) % MOD;
                    }
                }
            }
        }

        dp_prev = dp_curr;
    }

    return result;
};