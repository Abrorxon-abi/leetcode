from typing import List


class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])

        memo = [[[None] * cols for _ in range(cols)] for _ in range(rows)]

        def get_max_cherries(r1, c1, c2):
            if r1 == rows or c1 < 0 or c1 == cols or c2 < 0 or c2 == cols:
                return 0

            if memo[r1][c1][c2] is not None:
                return memo[r1][c1][c2]

            cherries = grid[r1][c1]
            if c1 != c2:
                cherries += grid[r1][c2]

            max_cherries = 0
            for nc1 in range(c1 - 1, c1 + 2):
                for nc2 in range(c2 - 1, c2 + 2):
                    max_cherries = max(
                        max_cherries, get_max_cherries(r1 + 1, nc1, nc2))

            memo[r1][c1][c2] = cherries + max_cherries
            return memo[r1][c1][c2]

        return get_max_cherries(0, 0, cols - 1)
