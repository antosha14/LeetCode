'In this problem, we have a graph that consists of n nodes. We are given an integer n and an array edges where each element edges[i] = [a_i, b_i] represents an undirected edge between nodes a_i and b_i in the graph. The goal is to determine the number of connected components in the graph. A connected component is a set of nodes in a graph that are connected to each other by paths, and those nodes are not connected to any other nodes outside of the component. The task is to return the total count of such connected components.'


function countComponents(n: number, edges: number[][]): number {
    // Parent array to represent the disjoint set forest
    let parent: number[] = new Array(n);
    // Initialize each node to be its own parent
    for (let i = 0; i < n; ++i) {
        parent[i] = i;
    }

    // Function to find the root of the set that 'x' belongs to
    function find(x: number): number {
        if (parent[x] !== x) {
            // Path compression for efficiency
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    // Union the sets that the edges connect
    for (const [a, b] of edges) {
        // Perform union by setting the parent of the representative of 'a' 
        // to the representative of 'b'
        parent[find(a)] = find(b);
    }

    // Count the number of connected components
    // by counting the number of nodes that are their own parent
    let count = 0;
    for (let i = 0; i < n; ++i) {
        if (i === find(i)) {
            count++;
        }
    }
    return count;
}