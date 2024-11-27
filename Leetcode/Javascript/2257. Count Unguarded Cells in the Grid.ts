`
This LeetCode problem requires us to calculate the number of unoccupied cells in a 0-indexed m x n grid that are not guarded by any guards and not blocked by walls. We are given two lists, guards and walls, where each element is a pair of coordinates representing the location of a guard or a wall, respectively. A guard can see and thus guard all cells in the four cardinal directions (north, east, south, or west) unless there is a wall or another guard obstructing the view. Cells are considered guarded if at least one guard can see them. Our goal is to count how many cells are left unguarded, considering that walls and guards themselves occupy some of the cells.
`

function countUnguarded(maxRows: number, maxCols: number, guards: number[][], walls: number[][]): number {
    // Create a grid to represent the museum with default values set to 0
    const grid: number[][] = Array.from({ length: maxRows }, () => Array.from({ length: maxCols }, () => 0));
  
    // Mark the positions of guards with 2 on the grid
    for (const [row, col] of guards) {
        grid[row][col] = 2;
    }
  
    // Mark the positions of walls with 2 on the grid
    for (const [row, col] of walls) {
        grid[row][col] = 2;
    }
  
    // Directions array to facilitate exploration in the 4 cardinal directions
    const directions: number[] = [-1, 0, 1, 0, -1];
  
    // For each guard, mark the positions they can guard based on the grid constraints
    for (const [guardRow, guardCol] of guards) {
        // Check all directions: up, right, down, and left
        for (let k = 0; k < 4; ++k) {
            // Initialize guard's position to start casting
            let [x, y] = [guardRow, guardCol];
            let [deltaX, deltaY] = [directions[k], directions[k + 1]];
          
            // Move in the current direction as long as it's within bounds and not blocked by walls or other guards
            while (x + deltaX >= 0 && x + deltaX < maxRows && y + deltaY >= 0 && y + deltaY < maxCols && grid[x + deltaX][y + deltaY] < 2) {
                x += deltaX;
                y += deltaY;
                // Mark the guarded position with a 1
                grid[x][y] = 1;
            }
        }
    }
  
    // Count the number of unguarded positions in the grid
    let unguardedCount = 0;
    for (const row of grid) {
        for (const cell of row) {
            if (cell === 0) {
                unguardedCount++;
            }
        }
    }
  
    // Return the count of unguarded positions
    return unguardedCount;
}