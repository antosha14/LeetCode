// Отталкивайся от боковых, и от них помечай элменты, которые могут достигнуть конкретный океан

// Directions for moving up, down, left, or right
// Grid to track the number of oceans each cell can flow to
// Visited matrix to prevent revisiting cells
// Define the depth-first search function to explore the grid

// Explore adjacent cells
// Check if the adjacent cell is within bounds and its height is higher or equal

// Flow from the Pacific Ocean (top and left edges)
// Reset visited cells before starting from the Atlantic Ocean (bottom and right edges)
// Flow from the Atlantic Ocean (bottom and right edges)

// Collect cells where the water can flow to both oceans
// If water flows to both oceans
// Return the list of cells with dual ocean water flow
function pacificAtlantic(heights: number[][]): number[][] {
    const rowCount = heights.length;
    const colCount = heights[0].length;
    const directions = [
        [1, 0],   
        [0, 1],  
        [-1, 0], 
        [0, -1],
    ];
   
    const grid = new Array(rowCount).fill(0).map(() => new Array(colCount).fill(0));
    const visited = new Array(rowCount).fill(0).map(() => new Array(colCount).fill(false));
    
    const dfs = (row: number, col: number) => {
        if (visited[row][col]) {
            return;
        }
        grid[row][col]++;
        visited[row][col] = true;
        const height = heights[row][col];
        
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            
            if (height <= (heights[newRow]?.[newCol] ?? -1)) {
                dfs(newRow, newCol);
            }
        }
    };

    
    for (let col = 0; col < colCount; col++) {
        dfs(0, col);
    }
    for (let row = 0; row < rowCount; row++) {
        dfs(row, 0);
    }
    
    visited.forEach(row => row.fill(false));

    for (let col = 0; col < colCount; col++) {
        dfs(rowCount - 1, col);
    }
    for (let row = 0; row < rowCount; row++) {
        dfs(row, colCount - 1);
    }

    
    const results: number[][] = [];
    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            if (grid[row][col] === 2) {  
                results.push([row, col]);
            }
        }
    }
    return results;
}

// Fastest solution
/**
 * Approach 1: DFS ❌
 * 一轮遍历有问题
 */
function pacificAtlantic1(heights: number[][]): number[][] {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0],]
    const rows = heights.length
    const cols = heights[0].length
    const result: number[][] = []
    enum FlowStatus {
      canNotFlow = -1,
      checkingFlow,
      canFlowToPacificOcean,
      canFlowToAtlanticOcean,
      canFlowToBothOceans,
    }
  
    const canFlow: FlowStatus[][] = Array.from({ length: rows }, () => new Array(cols))
  
    const dfs = (row: number, col: number) => {
      canFlow[row][col] = FlowStatus.checkingFlow
      // top right corner or lower left corner => Atlantic ocean and Pacific ocean
      if ((row === 0 && col === cols - 1) || (row === rows - 1 && col === 0)) {
        canFlow[row][col] = FlowStatus.canFlowToBothOceans
        result.push([row, col])
        return
      }
  
      // left and top edges => Pacific ocean
      if (row === 0 || col === 0) {
        canFlow[row][col] = FlowStatus.canFlowToPacificOcean
      }
  
      // right and bottom edges => Atlantic ocean
      if (row === rows - 1 || col === cols - 1) {
        canFlow[row][col] = FlowStatus.canFlowToAtlanticOcean
      }
  
      for (const [moveRow, moveCol] of directions) {
        const nextRow = row + moveRow
        const nextCol = col + moveCol
        if (
          nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols && heights[nextRow][nextCol] <= heights[row][col]
        ) {
          if (canFlow[nextRow][nextCol] === undefined) {
            dfs(nextRow, nextCol)
          }
          if (canFlow[nextRow][nextCol] === FlowStatus.canNotFlow) continue
          canFlow[row][col] |= canFlow[nextRow][nextCol]
        }
      }
      if (canFlow[row][col] === FlowStatus.canFlowToBothOceans) {
        result.push([row, col])
      }
      if (canFlow[row][col] === 0) {
        canFlow[row][col] = FlowStatus.canNotFlow
      }
    }
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (canFlow[row][col] !== undefined) continue
        dfs(row, col)
      }
    }
    return result
  }
