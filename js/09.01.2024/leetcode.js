/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

function leafSimilar(root1, root2) {
    function dfs(node, sequence) {
        if (!node) return;

        if (!node.left && !node.right) {
            sequence.push(node.val);
            return;
        }

        dfs(node.left, sequence);
        dfs(node.right, sequence);
    }

    const sequence1 = [];
    const sequence2 = [];

    dfs(root1, sequence1);
    dfs(root2, sequence2);

    return sequence1.toString() === sequence2.toString();
}
