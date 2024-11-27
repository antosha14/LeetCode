// Determine the dimensions of the image
// Target color to replace
// Check if the current pixel is outside the image boundaries,
// already has the new color, or is not matching the target color.
// Exit the function without further processing.
// Fill the current pixel with the new color.
// Recursively apply the fill operation to the neighboring pixels.
// Call the dfs function on the starting pixel.
// Return the updated image after the flood fill.
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const rowCount = image.length;
    const colCount = image[0].length;
    const targetColor = image[sr][sc];

    function dfs(row: number, col: number): void {
        
        if (
            row < 0 || row === rowCount ||
            col < 0 || col === colCount ||
            image[row][col] !== targetColor ||
            image[row][col] === newColor
        ) {
            return;
        }
        image[row][col] = newColor;
        dfs(row + 1, col); 
        dfs(row - 1, col); 
        dfs(row, col + 1); 
        dfs(row, col - 1);
    }

    dfs(sr, sc);
    return image;
}