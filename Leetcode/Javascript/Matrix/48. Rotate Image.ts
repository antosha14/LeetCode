// Сначала меняем местами ряды
// А потом всё кроме главной диагонали, x и y местами

// First, reverse the rows of the matrix to position elements for the rotation.
// Then, swap the elements along the diagonal.
// Only iterate through the first row up to row before the last,
// since after that elements would have already been swapped.
// Swap elements across the diagonal, hence j starts from row + 1 to prevent swapping elements twice.
// Temporary variable to hold the current element to be swapped.
// Swap the element with its transposed position element.

/**
 * Rotates an N x N matrix by 90 degrees clockwise.
 * @param matrix The N x N matrix to rotate (will be modified in place).
 */
function rotate(matrix: number[][]): void {
    matrix.reverse();

    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < row; ++col) {
            const temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }
}