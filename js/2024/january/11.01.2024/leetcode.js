/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxAncestorDiff = function (root) {
    function dfs(node, maxVal, minVal) {
        if (!node) {
            return maxVal - minVal;
        }

        maxVal = Math.max(maxVal, node.val);
        minVal = Math.min(minVal, node.val);

        const leftDiff = dfs(node.left, maxVal, minVal);
        const rightDiff = dfs(node.right, maxVal, minVal);

        return Math.max(leftDiff, rightDiff);
    }

    return dfs(root, root.val, root.val);
};