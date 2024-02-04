/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var kInversePairs = function (n, k) {
    const MOD = 1000000007;

    const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            for (let p = 0; p <= Math.min(j, i - 1); p++) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - p]) % MOD;
            }
        }
    }

    return dp[n][k];
};