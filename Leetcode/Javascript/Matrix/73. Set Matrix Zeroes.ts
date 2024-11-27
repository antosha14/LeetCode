// используем первый ряд и остаток без первого ряда колонки как хранилище для индикаторов обнуления

function setZeroes(matrix: number[][]): void {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    const isFirstRowZero = matrix[0].includes(0);
    const isFirstColZero = matrix.some(row => row[0] === 0);

    for (let row = 1; row < rowCount; ++row) {
        for (let col = 1; col < colCount; ++col) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }

    for (let row = 1; row < rowCount; ++row) {
        for (let col = 1; col < colCount; ++col) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if (isFirstRowZero) {
        for (let col = 0; col < colCount; col++) {
            matrix[0][col] = 0;
        }
    }
  
    if (isFirstColZero) {
        for (let row = 0; row < rowCount; row++) {
            matrix[row][0] = 0;
        }
    }
}