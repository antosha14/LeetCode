// Альтернативно через 4 поинтера и их сдвиг
// Массив направлений    где текущий для ряда а некст для колонки и через остаток от деления на 4 смена направления

function spiralOrder(matrix: number[][]): number[] {
    const rowCount = matrix.length;
    const colCount = matrix[0].length; 
    const result: number[] = []; 
    const visited = new Array(rowCount).fill(0).map(() => new Array(colCount).fill(false)); 
    const directions = [0, 1, 0, -1, 0];
    let remainingCells = rowCount * colCount;
  
    let row = 0;
    let col = 0;
    let dirIndex = 0;
  
    for (; remainingCells > 0; --remainingCells) {
        result.push(matrix[row][col]); 
        visited[row][col] = true;

        const nextRow = row + directions[dirIndex];
        const nextCol = col + directions[dirIndex + 1];

        if (nextRow < 0 || nextRow >= rowCount || nextCol < 0 || nextCol >= colCount || visited[nextRow][nextCol]) {
            dirIndex = (dirIndex + 1) % 4;
        }

        row += directions[dirIndex];
        col += directions[dirIndex + 1];
    }
  
    return result;
}