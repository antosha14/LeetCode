function isValidBST2(root: TreeNode | null): boolean {
    let min = -Infinity;
    let max = Infinity;

    function validate(node, min, max) {
        if (node === null) return true;

        if (node.val <= min || node.val >= max) return false;

        return validate(node.left, min, node.val) &&
                validate(node.right, node.val, max)
    }
    return validate(root, min, max);
};


// Define the previous node to keep track of during in-order traversal
// Traverse the left subtree
// Check if the current node's value is greater than the previous node's value
// Update the previous node to the current node
// Traverse the right subtree
// Start the recursive in-order traversal from the root
const isValidBST = (root: TreeNode | null): boolean => {
    let previous: TreeNode | null = null;
  
    const inorderTraversal = (node: TreeNode | null): boolean => {
      if (node === null) {
        return true;
      }
      if (!inorderTraversal(node.left)) {
        return false;
      }
      if (previous && node.val <= previous.val) {
        return false;
      }
      previous = node;
      return inorderTraversal(node.right);
    };

    return inorderTraversal(root);
  };

