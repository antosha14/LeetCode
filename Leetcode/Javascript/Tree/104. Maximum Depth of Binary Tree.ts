// An empty tree has a depth of zero
// Recursively compute the depth of the left and right subtree
// and return the greater one increased by 1 for the current node
function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}