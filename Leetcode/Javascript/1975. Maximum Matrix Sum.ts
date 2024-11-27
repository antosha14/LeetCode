`
Задача приходит к тому, что если чётное число отрицательных значений, ТО ВСЕ МОЖНО ПРИВЕСТИ К ПОЛОЖИТЕЛЬНОМУ, а если нечётное, ТО 1 БУДЕТ ОТРИЦАТЕЛЬНЫМ, соответственно максимум будет достигнут в случае, если отрицательным останется наименьшее значение в матрице

Общий каунтер, каунтер миниума и кол-ва негативных значений
ДОКАЗАТЕЛЬСТВО
`

// Count of negative numbers in the matrix
// Sum of the absolute values of the elements in the matrix
// Smallest absolute value found in the matrix
// Iterate through each row of the matrix
// Iterate through each value in the row
// Add the absolute value to the sum
// Update min absolute value if necessary
// Increment count if the value is negative
// If the count of negative numbers is even, the sum is already maximized
// Otherwise, subtract double the smallest absolute value to negate an odd count of negatives

function maxMatrixSum(matrix: number[][]): number {
    let negativeCount = 0; 
    let sum = 0; 
    let minAbsValue = Infinity; 
    for (const row of matrix) {
        for (const value of row) {
            sum += Math.abs(value); 
            minAbsValue = Math.min(minAbsValue, Math.abs(value)); 
            negativeCount += value < 0 ? 1 : 0; 
        }
    }

    if (negativeCount % 2 == 0) {
        return sum;
    }
  
    return sum - minAbsValue * 2;
}