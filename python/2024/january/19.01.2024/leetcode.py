from typing import List


class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        n = len(matrix)

        dp = [[0] * n for _ in range(n)]
        for i in range(n):
            dp[0][i] = matrix[0][i]

        for i in range(1, n):
            for j in range(n):
                left = dp[i-1][j-1] if j-1 >= 0 else float('inf')
                right = dp[i-1][j+1] if j+1 < n else float('inf')
                dp[i][j] = matrix[i][j] + min(dp[i-1][j], left, right)

        min_sum = min(dp[-1])

        return min_sum
