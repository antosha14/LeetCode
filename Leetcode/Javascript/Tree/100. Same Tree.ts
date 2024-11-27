// Check if both nodes are null, which implies that we've reached the end of both trees.
// If one of the nodes is null or if the values of the nodes do not match, the trees aren't the same.
// Recursively check the left and right subtrees.
function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
    if (tree1 === null && tree2 === null) {
        return true;
    }
   
    if (tree1 === null || tree2 === null || tree1.val !== tree2.val) {
        return false;
    }
  
    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}
