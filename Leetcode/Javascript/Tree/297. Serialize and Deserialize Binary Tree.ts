function serialize(root: TreeNode | null): string {
    if (root === null) {
        return '#';
    }
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data: string): TreeNode | null {
    const values = data.split(',').reverse();
    const buildTree = (): TreeNode | null => {
        const current = values.pop();
        if (current === undefined || current === '#') {
            return null;
        }
        return new TreeNode(Number(current), buildTree(), buildTree());
    };
    
    return buildTree();
}