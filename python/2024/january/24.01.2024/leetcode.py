from typing import Optional

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def pseudoPalindromicPaths(self, root: Optional[TreeNode]) -> int:
        def is_pseudo_palindromic(path_count):
            odd_count = sum(1 for count in path_count.values()
                            if count % 2 != 0)
            return odd_count <= 1

        def dfs(node, path_count):
            if not node:
                return 0

            path_count[node.val] = path_count.get(node.val, 0) + 1

            if not node.left and not node.right:
                return 1 if is_pseudo_palindromic(path_count) else 0

            left_count = dfs(node.left, path_count.copy())
            right_count = dfs(node.right, path_count.copy())

            return left_count + right_count

        return dfs(root, {})
