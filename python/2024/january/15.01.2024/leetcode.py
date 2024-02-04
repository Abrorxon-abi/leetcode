from collections import defaultdict
from typing import List


class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        losses = defaultdict(int)

        for winner, loser in matches:
            losses[loser] += 1

        zero_losses = []
        one_loss = []

        for player in set(player for match in matches for player in match):
            if player in losses:
                if losses[player] == 0:
                    zero_losses.append(player)
                elif losses[player] == 1:
                    one_loss.append(player)
            else:
                zero_losses.append(player)

        zero_losses.sort()
        one_loss.sort()

        return [zero_losses, one_loss]
