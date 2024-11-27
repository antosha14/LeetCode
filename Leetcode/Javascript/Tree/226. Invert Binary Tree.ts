// Recursive function to traverse the tree and swap children
// If the node is null, do nothing

// Swap the left and right children
// Recursively invert the left subtree
// Recursively invert the right subtree

// Start inverting from the root node
// Return the new root after inversion
function invertTree(treeRoot: TreeNode | null): TreeNode | null {
    function invertNode(node: TreeNode | null): void {
        if (node === null) {
            return; 
        }
        [node.left, node.right] = [node.right, node.left]; 
        invertNode(node.left); 
        invertNode(node.right); 
    }
  
    invertNode(treeRoot); 
    return treeRoot; 
}