let startNode;
const countLength = (root, level) => {
    if (root && !root.visited) {
        root.visited = true;
        var ans = countLength(root.left, level + 1);
        var ans1 = countLength(root.right, level + 1);
        var ans2 = countLength(root.parent, level + 1);
        return Math.max(ans, ans1, ans2);
    }
    return level - 1;
}
const changeTree = (root, start) => {
    if (root) {
        if (root.val === start) startNode = root;
        if (root.left) root.left.parent = root;
        if (root.right) root.right.parent = root;
        root.visited = false;
        changeTree(root.left, start);
        changeTree(root.right, start);
    }
}
var amountOfTime = function (root, start) {
    changeTree(root, start);
    return countLength(startNode, 0);
};