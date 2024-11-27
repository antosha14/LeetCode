`
В правом сабдереве не может быть ничего меньше того что в рут ноде
`

// Decrement k-th position, initially the number of elements to skip
// Base case: if the current node is null, return -1 to indicate no further nodes in this path
// Recurse on the left subtree
// If a valid non-negative value is found from the left subtree, return it as the result
// Decrement elementsToSkip to move towards the k-th smallest element
// If elementsToSkip becomes 0, current node's value is the k-th smallest, return it
// Recurse on the right subtree
// Perform in-order traversal and return value of the k-th smallest element
function kthSmallest(root: TreeNode | null, k: number): number {
    let elementsToSkip: number = k;
    function inOrderTraversal(node: TreeNode | null): number {
      if (node === null) {
        return -1;
      }
      const leftValue = inOrderTraversal(node.left);
      if (leftValue !== -1) {
        return leftValue;
      }
      elementsToSkip--;
      if (elementsToSkip === 0) {
        return node.val;
      }
      return inOrderTraversal(node.right);
    }
  
    return inOrderTraversal(root);
  }

function kthSmallest2(root: TreeNode | null, k: number): number {
    const arr: number[] = [];
    function inorder(root: TreeNode | null) {
        if (root === null) return null;

        if (root.left !== null) inorder(root.left);
        arr.push(root.val);
        if (root.right !== null) inorder(root.right);
    }

    inorder(root);

    return arr.at(k - 1)!;
};