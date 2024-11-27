// Initialize an array to track the number of incoming edges (indegree) for each node.
// Populate the indegrees array by incrementing the indegree for every destination node
// in the edges.
// Initialize variables to store the answer (the champion’s index) and a count of nodes with 0 indegree.
// Iterate over each node and find nodes with an indegree of 0 (no incoming edges).
// If a node with no incoming edges is found, increment the count and update the answer.
// If there is exactly one node with no incoming edges, return that node's index.
// Otherwise, return -1 to indicate that no champion was found.
function findChampion(n: number, edges: number[][]): number {
    const indegrees: number[] = Array(n).fill(0);
    for (const [, destination] of edges) {
        ++indegrees[destination];
    }
    let answer: number = -1;
    let zeroIndegreeCount: number = 0;
    for (let i = 0; i < n; ++i) {
        if (indegrees[i] === 0) {
            
            ++zeroIndegreeCount;
            answer = i;
        }
    }
    return zeroIndegreeCount === 1 ? answer : -1;
}