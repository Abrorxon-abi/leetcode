class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rangeSumBST(self, root, low, high):
        if not root:
            return 0

        sum_val = 0

        if low <= root.val <= high:
            sum_val += root.val

        if root.val > low:
            sum_val += self.rangeSumBST(root.left, low, high)

        if root.val < high:
            sum_val += self.rangeSumBST(root.right, low, high)

        return sum_val
