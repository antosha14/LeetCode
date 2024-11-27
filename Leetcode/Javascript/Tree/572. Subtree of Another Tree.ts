// If both nodes are null, they are identical by definition.
// If one of the nodes is null or values do not match, trees aren't identical.
// Check recursively if the left subtree and right subtree are identical.

// If the main tree is null, there can't be a subtree.
// If the current subtrees are identical, return true.
  // Otherwise, continue the search in the left or right subtree of the main tree.
const isIdentical = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
  if (!root && !subRoot) {
    return true;
  }
  if (!root || !subRoot || root.val !== subRoot.val) {
    return false;
  }
  return isIdentical(root.left, subRoot.left) && isIdentical(root.right, subRoot.right);
};

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    return false;
  }
  return isIdentical(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}