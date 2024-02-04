class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        MOD = 10**9 + 7
        dp_prev = [[0] * n for _ in range(m)]
        dp_prev[startRow][startColumn] = 1
        result = 0
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        for move in range(1, maxMove + 1):
            dp_curr = [[0] * n for _ in range(m)]

            for i in range(m):
                for j in range(n):
                    for d in directions:
                        ni, nj = i + d[0], j + d[1]
                        if ni < 0 or ni >= m or nj < 0 or nj >= n:
                            result = (result + dp_prev[i][j]) % MOD
                        else:
                            dp_curr[ni][nj] = (
                                dp_curr[ni][nj] + dp_prev[i][j]) % MOD

            dp_prev = dp_curr

        return result
