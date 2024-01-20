/**
 * @param {number[][]} matrix
 * @return {number}
 */

const minFallingPathSum = (matrix) => {
    const n = matrix.length;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const left = (j - 1 >= 0) ? matrix[i - 1][j - 1] : Infinity;
            const right = (j + 1 < n) ? matrix[i - 1][j + 1] : Infinity;
            matrix[i][j] += Math.min(matrix[i - 1][j], left, right);
        }
    }

    return Math.min(...matrix[n - 1]);
};