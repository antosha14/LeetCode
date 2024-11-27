`
Можно группировать ряды, которые  либо идентичны, либо инверсы друг друга
Потому что их можно привести ОДНОВРЕМЕННО к одинаковым значениям, флипнув определённое кол-во колонок

Находим эти ряды: если первый элемент 1 - то просто помещаем, а если 0 - то инверсим и только тогда помещаем, потому что можно инверснуть все значения, а нам нужны ИМЕННО ИДЕНТИЧНЫЕ ЛИБО ИНВЕРСЫ
МАПА с ключами в виде элементов массива объединённых в стринг
`

// Map to store the frequency of each row pattern.
// Variable for tracking the maximum number of equal rows.
// If the first element of the row is a 1, we flip the entire row to make sorting consistent.
// Perform the flip by XOR'ing each element in the row with 1.
// Convert the row to a string to use as a key in the map.
// Update the count in the map for the given row pattern.
// If it doesn't exist yet, initialize to 0 then add 1, else increment the current count.
// Update maxEqualRows with the maximum of the current value and the new count for this pattern.
// Return the highest frequency of equal row patterns after flips.
function maxEqualRowsAfterFlips(matrix: number[][]): number {
    const countMap = new Map<string, number>();
    let maxEqualRows = 0; 
    for (const row of matrix) {
        if (row[0] === 1) {
            for (let i = 0; i < row.length; i++) {
                row[i] ^= 1;
            }
        }
        const rowString = row.join('');
        countMap.set(rowString, (countMap.get(rowString) || 0) + 1);
        maxEqualRows = Math.max(maxEqualRows, countMap.get(rowString)!);
    }
    return maxEqualRows;
}