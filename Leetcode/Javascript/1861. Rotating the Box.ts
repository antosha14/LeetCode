`
Очередь с индексами пустых элементов, когда видим камень, двигаем на первый индекс очереди
`

// Define type alias for readability
// Rotate the box by 90 degrees and let the stones fall with gravity
// Get the dimensions of the box
// Initialize the answer matrix with swapped dimensions (rotated box)
// Rotate the box clockwise by 90 degrees
// Assign values from the original box to the rotated box
// Process gravity in the rotated box
// Track empty spaces where stones can fall
// Encountered an obstacle, reset the list of empty spaces
// Found an empty space, add its position to the list
// Found a stone and there's an empty space below it
// Move the stone down to the nearest empty space
// Mark the old position as empty
// Add the position of the moved stone to the list of empty spaces and remove the one just filled
// Return the rotated box with stones affected by gravity
type Box = char[][];  

function rotateTheBox(box: Box): Box {
    const rows: number = box.length;
    const cols: number = box[0].length;
    let rotatedBox: Box = new Array(cols).fill(null).map(() => new Array(rows).fill('.'));
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            rotatedBox[col][rows - row - 1] = box[row][col];
        }
    }

    for (let col = 0; col < rows; ++col) {
        let emptySpaces: number[] = []; 
        for (let row = cols - 1; row >= 0; --row) {
            if (rotatedBox[row][col] === '*') {
                emptySpaces = [];
            } else if (rotatedBox[row][col] === '.') {
                emptySpaces.push(row);
            } else if (emptySpaces.length > 0) {
                rotatedBox[emptySpaces[0]][col] = '#';
                rotatedBox[row][col] = '.';
                emptySpaces.shift();
                emptySpaces.push(row);
            }
        }
    }

    return rotatedBox;
}

`
from collections import deque

class Solution:
    def rotateTheBox(self, box: List[List[str]]) -> List[List[str]]:
        rows, cols = len(box), len(box[0])
        rotated_box = [[None] * rows for _ in range(cols)]
      
        for row in range(rows):
            for col in range(cols):
                rotated_box[col][rows - row - 1] = box[row][col]
      
        for col in range(rows):
            queue = deque()  
            for row in reversed(range(cols)):
                if rotated_box[row][col] == '*':
                    queue.clear()
                elif rotated_box[row][col] == '.':
                    queue.append(row)
                elif queue:
                    new_pos = queue.popleft()  
                    rotated_box[new_pos][col] = '#' 
                    rotated_box[row][col] = '.' 
                    queue.append(row)
        return rotated_box
`