`
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.
`

`
Без цикла и все должны быть доступны
`

// Parent array to track the root parent of each node
// Initialize parent array so each node is its own parent initially

// Helper function to find the root parent of a node
// Path compression: make the found root parent the direct parent of 'node' 

// Explore each edge to check for cycles and connect components
// If two nodes have the same root parent, a cycle is detected
// Union operation: connect the components by making them share the same root parent
// Decrement the number of components by 1 for each successful union
// A valid tree must have exactly one connected component with no cycles
 
const validTree = (numberOfNodes: number, graphEdges: number[][]): boolean => {
    let parent: number[] = new Array(numberOfNodes);    
    for (let i = 0; i < numberOfNodes; ++i) {
      parent[i] = i;
    }
  
    const findRootParent = (node: number): number => {
      if (parent[node] !== node) {
        parent[node] = findRootParent(parent[node]);
      }
      return parent[node];
    };
    
    for (const [nodeA, nodeB] of graphEdges) {
      if (findRootParent(nodeA) === findRootParent(nodeB)) {
        return false;
      }
      parent[findRootParent(nodeA)] = findRootParent(nodeB);
      --numberOfNodes;
    }
  
    return numberOfNodes === 1;
  };