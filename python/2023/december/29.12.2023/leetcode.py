from typing import List


class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        n = len(jobDifficulty)

        if n < d:
            return -1

        dp = [[float('inf')] * (d + 1) for _ in range(n + 1)]
        dp[0][0] = 0

        for i in range(1, n + 1):
            for k in range(1, d + 1):
                max_difficulty = 0
                for j in range(i, 0, -1):
                    max_difficulty = max(max_difficulty, jobDifficulty[j - 1])
                    dp[i][k] = min(dp[i][k], dp[j - 1][k - 1] + max_difficulty)

        result = dp[n][d]
        return result if result != float('inf') else -1
