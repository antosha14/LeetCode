// Initialize the result array.
// If the root is null, the tree is empty, and we return the empty result.
// Initialize a queue to hold nodes at each level.
// Iterate until the queue is empty.

// Get the number of nodes at the current level.
// Process all nodes at the current level.
// Shift the first node from the queue.
// Proceed if the currentNode is not null.
// Add the value to the current level's result.
// Add left and right children if they exist.
// Add the current level's values to the overall result array.
// Return the result array containing the level order traversal.
function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    if (root === null) {
        return result;
    }
    const queue: TreeNode[] = [root];

    while (queue.length !== 0) {
        const levelLength = queue.length;
        const currentLevelValues: number[] = [];
        for (let i = 0; i < levelLength; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                currentLevelValues.push(currentNode.val);
                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }
        }
        result.push(currentLevelValues);
    }

    return result;
}