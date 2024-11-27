// Continue searching for the LCA as long as the current root is not null.
// If both nodes are smaller than the current root, LCA must be in the left subtree.
// If both nodes are larger than the current root, LCA must be in the right subtree.
// If we are in a situation where one node is on the left and the other is on the right,
// or one of the nodes is equal to the root, the current root is the LCA.

// If the root is null, it means we haven't found the LCA (which should not happen in a valid BST with both nodes present).
function lowestCommonAncestor(root: ITreeNode | null, nodeP: ITreeNode | null, nodeQ: ITreeNode | null): ITreeNode | null {
    while (root) {
        if (root.val > nodeP.val && root.val > nodeQ.val) {
            root = root.left;
        } else if (root.val < nodeP.val && root.val < nodeQ.val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
}

function lowestCommonAncestor2(
    root: TreeNode | null, 
    p: TreeNode | null, 
    q: TreeNode | null
): TreeNode | null {
    if (!root) {
        return null
    }

	if (
        root.val === p.val || 
        root.val === q.val || 
        (root.val < p.val && root.val > q.val) || 
        (root.val > p.val && root.val < q.val)
    ) {
        return root;
    } else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return lowestCommonAncestor(root.right, p, q)
    }
};