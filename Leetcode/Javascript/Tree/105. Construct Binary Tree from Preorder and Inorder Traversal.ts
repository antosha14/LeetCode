`
In a preorder traversal, the nodes are visited in the following order: root node, left subtree, and then right subtree. 
In an inorder traversal, the nodes are visited in this order: left subtree, root node, and then the right subtree.
`

// Create a map to efficiently find the index of values in the inorder array.
// Fill the map with the element as the key and index as the value.
// Base case: if there are no elements to construct the subtree, return null.
// Retrieve the root value of the current subtree from the preorder array.
// Find the index of the root value in the inorder array.
// Calculate the left subtree size.
// Recursively construct the left subtree.
// Recursively construct the right subtree.
// Create the root node with the constructed left and right subtrees.
// Start building the tree from the beginning of preorder and inorder arrays.
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const indexMap: Map<number, number> = new Map();
    const nodeCount = inorder.length;
    for (let i = 0; i < nodeCount; ++i) {
        indexMap.set(inorder[i], i);
    }

    const buildSubTree = (preStart: number, inStart: number, size: number): TreeNode | null => {
        if (size <= 0) {
            return null;
        }
        const rootValue = preorder[preStart];
        const rootIndex = indexMap.get(rootValue)!;
        const leftSize = rootIndex - inStart;
        const leftSubtree = buildSubTree(preStart + 1, inStart, leftSize);
        const rightSubtree = buildSubTree(preStart + 1 + leftSize, rootIndex + 1, size - 1 - leftSize);
        return new TreeNode(rootValue, leftSubtree, rightSubtree);
    };

    return buildSubTree(0, 0, nodeCount);
}