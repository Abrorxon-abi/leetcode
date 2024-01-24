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

var pseudoPalindromicPaths = function (root) {
    let count = 0;

    const dfs = (node, pathCount) => {
        if (!node) return;

        pathCount[node.val] = (pathCount[node.val] || 0) + 1;

        if (!node.left && !node.right) {
            if (isPseudoPalindromic(pathCount)) {
                count++;
            }
        }

        dfs(node.left, { ...pathCount });
        dfs(node.right, { ...pathCount });
    };

    const isPseudoPalindromic = (pathCount) => {
        let oddCount = 0;

        for (let digit in pathCount) {
            if (pathCount[digit] % 2 !== 0) {
                oddCount++;
            }
        }

        return oddCount <= 1;
    };

    dfs(root, {});
    return count;
};