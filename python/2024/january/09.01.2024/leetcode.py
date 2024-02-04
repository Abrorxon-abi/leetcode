from typing import Optional

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def dfs(node, sequence):
            if not node:
                return

            if not node.left and not node.right:
                sequence.append(node.val)
                return

            dfs(node.left, sequence)
            dfs(node.right, sequence)

        sequence1 = []
        sequence2 = []

        dfs(root1, sequence1)
        dfs(root2, sequence2)

        return sequence1 == sequence2
