// m is the number of rows in the grid
// n is the number of columns in the grid (assuming the grid is not empty)
// ans will hold the number of islands found

// The Depth-First Search function, which marks visited land sections as '0'
// Set the current location to '0' to mark as visited
// Array representing the 4 directions (up, right, down, left)
// Iterate over each direction
// Calculate the new coordinates based on the current direction
// Check if the new coordinates are within bounds and the cell contains '1'
// If so, perform DFS on the adjacent cell

// Iterate over every cell in the grid
// If the cell contains '1' (land), an island is found
// Perform DFS to mark the entire island
// Increment the island count
// Return the total number of islands found

function numIslands(grid: string[][]): number {
    const numberOfRows = grid.length;
    const numberOfColumns = grid[0].length;
    
    let numberOfIslands = 0;
    
    function depthFirstSearch(row: number, column: number) {
        grid[row][column] = '0';
        const directions = [-1, 0, 1, 0, -1];
        for (let k = 0; k < 4; ++k) {
            const newRow = row + directions[k];
            const newColumn = column + directions[k + 1];
            if (newRow >= 0 && newRow < numberOfRows && newColumn >= 0 && newColumn < numberOfColumns && grid[newRow][newColumn] === '1') {
                depthFirstSearch(newRow, newColumn);
            }
        }
    }

    for (let row = 0; row < numberOfRows; ++row) {
        for (let column = 0; column < numberOfColumns; ++column) {
            if (grid[row][column] === '1') {
                depthFirstSearch(row, column);
                numberOfIslands++;
            }
        }
    }

    return numberOfIslands;
}