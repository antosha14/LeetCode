// Get the dimensions of the board
// Directions array to assist in exploring all 4 adjacent cells (up, right, down, left)
// Depth-first search function to explore the board
// Base case: when the last character matches, return true
// If the current character does not match, return false
// Temporarily mark the board cell to avoid revisiting
// Explore all 4 directions from the current cell
// Check if the next cell is within the bounds of the board
// If the next cell is valid and the DFS from that cell is successful, return true

// Iterate over every cell in the board to see if a word path starts from there
function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [-1, 0, 1, 0, -1];

    const depthFirstSearch = (row: number, col: number, index: number): boolean => {
        if (index === word.length - 1) {
            return board[row][col] === word[index];
        }

        if (board[row][col] !== word[index]) {
            return false;
        }
      
        const tempChar = board[row][col];
        board[row][col] = '0';

        for (let d = 0; d < 4; ++d) {
            const nextRow = row + directions[d];
            const nextCol = col + directions[d + 1];
            const isInBounds = nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols;

            if (isInBounds && board[nextRow][nextCol] !== '0' && depthFirstSearch(nextRow, nextCol, index + 1)) {
                return true;
            }
        }

        board[row][col] = tempChar;
        return false;
    };

    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (depthFirstSearch(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
}