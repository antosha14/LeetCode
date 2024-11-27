`
Идея заключается в том, что чтобы был путь поднимаясь с низа дерева мы можем только один раз повернуть налево.
Для каждого нода, МАКСИМУМ ЕСЛИ БЫ СПЛИТ БЫЛ БЫ НЕ В ЭТОМ НОДЕ и для обновления если бы сплит был В ЭТОМ НОДЕ

The solution's intuition hinges on realizing that for any node, the maximum sum wherein that node is the highest point (i.e., the 'root' of that path) is its value plus the maximum sums of its left and right subtrees.
`
// Initialize a global variable to hold the maximum path sum
// Base case: If the node is null, return 0
// Calculate maximum sum starting from left child
// Calculate maximum sum starting from right child
// Update global maxPathSumValue with the maximum sum of the current subtree
// which includes the current node and both left and right maximum sums
// Return the maximum sum from current node to any leaf
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

let maxPathSumValue = -Infinity;

function maxPathSumDfs(node: TreeNode | null): number {
    if (!node) {
        return 0;
    }
  
    const leftMax = Math.max(0, maxPathSumDfs(node.left));
    const rightMax = Math.max(0, maxPathSumDfs(node.right));
    maxPathSumValue = Math.max(maxPathSumValue, leftMax + rightMax + node.val);
    return Math.max(leftMax, rightMax) + node.val;
}

function maxPathSum(root: TreeNode | null): number {
    maxPathSumValue = -Infinity;
    maxPathSumDfs(root);
    return maxPathSumValue;
}
